function greet(name) {
    return "Hello, " + name + "!";
}               
console.log(greet("saketh"));

const greetAgain= function(name){
    return "hey, "+name+"!";
};
console.log(greetAgain("saketh"));

const greetArrow=(name)=>{
    return "Yo, "+name+"!";
};
const greetShort=(name)=>"sup "+name+"!";
console.log(greetArrow("saketh"));
console.log(greetShort("saketh"));

function add(a,b){
    return a+b;
}
console.log(add(3,2));

function greetWithDefault(name="stranger"){
    return "hello, "+name+"!";
}
console.log(greetWithDefault("saketh"));
console.log(greetWithDefault());

function noReturn(){
    const x=5+5;
}
console.log(noReturn());

