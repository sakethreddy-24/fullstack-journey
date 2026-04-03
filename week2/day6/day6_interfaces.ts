// ===== PRACTICE =====

// 1. Create an interface 'Todo' with: id(number), text(string),
//    completed(boolean), createdAt(string)
// 2. Create an array of 3 Todo objects using that interface
// 3. Filter completed todos — TS should autocomplete .completed for you
// 4. Create an interface 'Car' with: brand, model, year, price
//    Then extend it to 'ElectricCar' which also has: batteryRange(number)

interface Todo {
    id: number;
    text: string;
    completed: boolean;
    createdAt: string;
}
const todo : Todo[] = [
    { id: 1, text: "buy pens", completed: false, createdAt: "11:00"},
    { id: 2, text: "eat fruits", completed: true, createdAt: "12:00"},
    { id: 3, text: "buy groceries", completed: true, createdAt: "01:00"},
];

const completed = todo.filter((t) => t.completed);
const text = todo.map((t) => t.text);

console.log(completed);
console.log(text);


interface Car {
    brand: string;
    model: string;
    year: number;
    price: number;
}

interface ElectricCar extends Car {
    batteryRange: number;
}

const evcar : ElectricCar ={
    brand: "Bmw",
    model: "m4",
    year: 2026,
    price: 2000000,
    batteryRange: 1000,
};