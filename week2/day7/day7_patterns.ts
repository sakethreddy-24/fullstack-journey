// ===== PRACTICE =====
// 1. Create an enum 'Grade' with A=90, B=75, C=50, F=0
// 2. Write a function getGrade(marks: number): Grade
//    that returns the correct Grade enum value
// 3. Create a Result<T> based function called divide(a, b)
//    returns Success with the result if b !== 0
//    returns Failure with "Cannot divide by zero" if b === 0

//1.

enum Grade {
    A = "A",
    B = "B",
    C = "C",
    F = "F"
}

//2.
const getGrade = (marks: number): Grade => {
    if(marks >= 90){
        return Grade.A;
    } else if(marks >= 75){
        return Grade.B;
    } else if(marks >= 50){
        return Grade.C;
    } else {
        return Grade.F;
    }
};

console.log("Marks 30:", getGrade(30));

//3.

interface Success<T> {
    ok: true;
    data: T;
}

interface Failure {
    ok: false;
    error: string;
}

type Result<T> = Success<T> | Failure;

function divide(a: number, b: number): Result<number> {
    if (b === 0) {
        return { ok: false, error: "Cannot divide by zero" };
    } else {
        return { ok: true, data: a / b };
    }
}


console.log(divide(10, 2));
console.log(divide(10, 0)); 
