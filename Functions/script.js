console.log("working");
sayMyName();
function sayMyName() {
    console.log("My Name is Harish");
    console.log("execution done ......");
}


sayMyName();


// adding parameters and arguements 
function addTwoNumbers(num1, num2) {
//parameters -> (num1, num2)
const value = num1 + num2;
console.log(value);
}
//arguments
addTwoNumbers(5, 10);
addTwoNumbers(25, 30);

function isDivisible(num, divisor) {
    if (num % divisor === 0) {
        return true;
    } else {
        return false;
    }
}

isDivisible(); 
console.log(isDivisible(5, 2));
console.log(isDivisible(25, 5));

// ES-6 (anonymous function)
const anon_func =function (param){
    console.log("I'm anonymous function", param);
};
anon_func("new param");

// arrow function
let arrow_func = (a, b) => a + b;
console.log("function value", arrow_func(30, 10)); // output - 40 

// IIFE (Immediately invoked function)
(function callMe(name) {
    console.log("I'm called immediately", name);
})("harish");
