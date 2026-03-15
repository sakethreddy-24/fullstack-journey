localStorage.setItem("name","Saketh");
localStorage.setItem("age","19");
localStorage.setItem("city","Hyderabad");

const name = localStorage.getItem("name");
console.log(name);

localStorage.removeItem("age");

localStorage.setItem("score",100);
const score = localStorage.getItem("score");
console.log(score);
console.log(typeof score);

const user = {name: "Saketh", age: 19, city: "Hyderabad"};
localStorage.setItem("user",JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser);
console.log(typeof storedUser);

const todos = ["buy milk", "study js", "go for a walk"];
localStorage.setItem("todos",JSON.stringify(todos));

const storedTodos = JSON.parse(localStorage.getItem("todos"));
console.log(sessionStorage);


const getFromStorage = (key, defaultValue) => {
    const item = localStorage.getItem(key);
    return item?JSON.parse(item):defaultValue;
};

const notes = getFromStorage("notes",[]);
console.log(notes);