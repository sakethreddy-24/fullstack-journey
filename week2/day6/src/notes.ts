// Define the shape of a Note
interface Note {
  id: string;
  title: string;
  body: string;
}

// Type the state
let notes: Note[] = JSON.parse(localStorage.getItem("notes") || "[]");
let activeId: string | null = notes.length > 0 ? notes[0].id : null;

// Type the DOM elements
const newBtn = document.getElementById("new-btn") as HTMLButtonElement;
const deleteBtn = document.getElementById("delete-btn") as HTMLButtonElement;
const notesList = document.getElementById("notes-list") as HTMLUListElement;
const noteTitle = document.getElementById("note-title") as HTMLInputElement;
const noteBody = document.getElementById("note-body") as HTMLTextAreaElement;
const savedMsg = document.getElementById("saved-msg") as HTMLDivElement;

// Type the functions
const saveNotes = (): void => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

const generateId = (): string => Date.now().toString();

const formatDate = (timestamp: string): string => {
  return new Date(parseInt(timestamp)).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric"
  });
};

const showSaved = (): void => {
  savedMsg.textContent = "✓ Saved";
  setTimeout(() => (savedMsg.textContent = ""), 1500);
};

const renderSidebar = (): void => {
  notesList.innerHTML = "";

  if (notes.length === 0) {
    notesList.innerHTML = `<li style="color:#6c7086">No notes yet</li>`;
    return;
  }

  notes.forEach((note: Note) => {
    const li = document.createElement("li");
    li.className = note.id === activeId ? "active" : "";
    li.innerHTML = `
      ${note.title || "Untitled"}
      <span class="note-date">${formatDate(note.id)}</span>
    `;
    li.addEventListener("click", () => {
      activeId = note.id;
      renderSidebar();
      loadNote();
    });
    notesList.appendChild(li);
  });
};

const loadNote = (): void => {
  const note = notes.find((n: Note) => n.id === activeId);
  if (!note) {
    noteTitle.value = "";
    noteBody.value = "";
    return;
  }
  noteTitle.value = note.title;
  noteBody.value = note.body;
};

let saveTimeout: ReturnType<typeof setTimeout>;

const autoSave = (): void => {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    const note = notes.find((n: Note) => n.id === activeId);
    if (!note) return;
    note.title = noteTitle.value;
    note.body = noteBody.value;
    saveNotes();
    renderSidebar();
    showSaved();
  }, 500);
};

noteTitle.addEventListener("input", autoSave);
noteBody.addEventListener("input", autoSave);

newBtn.addEventListener("click", () => {
  const newNote: Note = {
    id: generateId(),
    title: "",
    body: "",
  };
  notes.unshift(newNote);
  activeId = newNote.id;
  saveNotes();
  renderSidebar();
  loadNote();
  noteTitle.focus();
});

deleteBtn.addEventListener("click", () => {
  if (!activeId) return;
  notes = notes.filter((n: Note) => n.id !== activeId);
  activeId = notes.length > 0 ? notes[0].id : null;
  saveNotes();
  renderSidebar();
  loadNote();
});

renderSidebar();
loadNote();