function makeMultiplier(x){
    return function(y){
        console.log(y*x);
    };
}


const double=makeMultiplier(2);
double(5);

const triple = makeMultiplier(3);
triple(6)