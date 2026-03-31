// practice

//1. Create a variable 'price' that can be number or string

let price: string | number = 1000;
price = "sss1000";

 console.log(price);


 // 2. Write a function 'multiply(a, b)' that takes 2 numbers and returns a number

const multiply=(a:number , b:number): number =>{
    return a*b;
}
console.log(multiply(2,3));

// 3. Write a function 'isEven(n)' that takes a number and returns boolean

const isEven = (a: number):boolean=>{
     return a%2===0;
}
console.log(isEven(23));

// 4. Create a type alias 'Direction' that only allows "north","south","east","west"
//    then create a variable using that type

type Direction = "north" | "south" | "east" | "west";

let myDirection: Direction = "south";
 console.log(myDirection);