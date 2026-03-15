const title = document.getElementById("main-title");
const description = document.querySelector(".description");
const btn = document.getElementById("change-btn");

console.log(title.textContent);
title.textContent = "DOM is easy!";

title.style.color = "purple";
title.style.fontSize = "32px";
description.style.color = "gray";

title.classList.add("highlight");
title.classList.remove("highlight");
title.classList.toggle("highlight");

const input = document.getElementById("name-input");
input.setAttribute("placeholder", " type something...");
console.log(input.getAttribute("placeholder"));

btn.addEventListener("click", () =>{
    title.textContent = "you clicked the button";
    title.style.color = "green";
    btn.textContent = "clicked";
    btn.style.background = "#16a34a";
});
const greetBtn = document.getElementById("greet-btn");
const nameInput = document.getElementById("name-input");
const greetOutput = document.getElementById("greet-output");

greetBtn.addEventListener("click",() => {
    const name = nameInput.value.trim();

    if(name === ""){
        greetOutput.textContent = "Please enter your name ";
        greetOutput.style.color = "red";
        return;
    }

    greetOutput.textContent = "hello, "+name+"!welcome to DOM manipulation";
    greetOutput.style.color = "green";
    nameInput.value = "";
});

nameInput.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        greetBtn.click();
    }
} );

const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const countText = document.getElementById("count");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

const saveTodos = ()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
};

const renderList = () =>{
    todoList.innerHTML = "";
    
    const remaining = todos.filter((todo)=>!todo.completed).length;
    countText.textContent = "remaining: "+ remaining;

    todos.forEach((todo, index) =>{
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = todo.text;

        if(todo.completed){
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        }

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✅";
        completeBtn.addEventListener("click",()=>{
            todos[index].completed = !todos[index].completed;
            saveTodos();
            renderList();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", () => {
        todos.splice(index, 1);
        saveTodos(); // ← save after every change
        renderList();
    });
    
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    });
};

addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text === "") return;
  todos.push({ text, completed: false });
  saveTodos(); // ← save after adding
  todoInput.value = "";
  renderList();
});

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBtn.click();
});

renderList();