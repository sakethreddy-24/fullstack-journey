const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const countText = document.getElementById("count");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const renderList = () => {
    todoList.innerHTML = "";

    const remaining = todos.filter((todo) => todo.completed === false).length;
    countText.textContent = "remaining: "+ remaining;

    todos.forEach((todo, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = todo.text;

         if( todo.completed){
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
         }

         const completeBtn = document.createElement("button");
         completeBtn.textContent = "✅";

         completeBtn.addEventListener("click", () =>{
            todos[index].completed = !todos[index].completed;
            saveTodos();
            renderList();
         });

         const deleteBtn = document.createElement("button");
         deleteBtn.textContent = "❌";

          deleteBtn.addEventListener("click", () =>{
            todos.splice(index,1);
            saveTodos();
            renderList();
         });

         li.appendChild(span);
         li.appendChild(completeBtn);
         li.appendChild(deleteBtn);

         todoList.appendChild(li);
    });
};

addBtn.addEventListener("click", () =>{
    const text = todoInput.value.trim();
    if(text === "") return;

    todos.push({text: text, completed: false});
    saveTodos();
    todoInput.value = "";
    renderList();
});

 todoInput.addEventListener("keydown",(e) =>{
    if(e.key === "enter") addBtn.click();
 });

 renderList();
 



