const add = (a,b) => a+b;
const power = (a,b) => a**b;
const calculate = (a, operator, b) =>{
    if(operator === "+") return add(a,b);
    if(operator === "**") return power(a,b);
};
console.log(calculate(2,"+",3));
console.log(calculate(2,"**",3));
