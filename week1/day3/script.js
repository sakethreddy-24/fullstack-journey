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