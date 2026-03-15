const newBtn = document.getElementById("new-btn");
const deleteBtn = document.getElementById("delete-btn");
const notesList = document.getElementById("notes-list");
const noteTitle = document.getElementById("note-title");
const noteBody = document.getElementById("note-body");
const savedMsg = document.getElementById("saved-msg");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let activeId = notes.length > 0 ? notes[0].id : null;

const saveNotes = () => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

const generateId = () => Date.now().toString();

const formatDate = (timestamp) => {
  return new Date(parseInt(timestamp)).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric"
  });
};

const showSaved = () => {
  savedMsg.textContent = "✓ Saved";
  setTimeout(() => savedMsg.textContent = "", 1500);
};

const renderSidebar = () => {
  notesList.innerHTML = "";

  if (notes.length === 0) {
    notesList.innerHTML = `<li style="color:#6c7086; font-size:13px; padding:12px">No notes yet</li>`;
    return;
  }

  notes.forEach((note) => {
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

const loadNote = () => {
  const note = notes.find((n) => n.id === activeId);

  if (!note) {
    noteTitle.value = "";
    noteBody.value = "";
    return;
  }

  noteTitle.value = note.title;
  noteBody.value = note.body;
};

let saveTimeout;

const autoSave = () => {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    const note = notes.find((n) => n.id === activeId);
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
  const newNote = {
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

  notes = notes.filter((n) => n.id !== activeId);
  activeId = notes.length > 0 ? notes[0].id : null;
  saveNotes();
  renderSidebar();
  loadNote();
});


renderSidebar();
loadNote();