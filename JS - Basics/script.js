// Data Types 

// Primitive Data Types:

//Number:
console.log(typeof 5); //integer or float vakues
//String:
console.log(typeof "5"); //character encoded in "" ''
//Boolean:
console.log(typeof true); //true or false 

// Non Primitive Datatypes 
let arr = [1,2,3,4,5]; //array
console.log(typeof arr, arr);

let obj = {1: "1"}; //object
console.log(typeof obj, obj);

let a = 10;
let b =  a;
console.log(a); // output-10
console.log(b); // output-10
b = 15;
console.log(a); // output-10
console.log(b); // output-15

let sam_arr = [1,2,3];
let sam_arr2 = sam_arr;
console.log(sam_arr); // output [1,2,3] -> copy by value
console.log(sam_arr2); // output [1,2,3] -> copy by value
sam_arr2[1] = 4;
console.log(sam_arr); // output [1,4,3] -> copy by reference
console.log(sam_arr2); // output [1,4,3] -> copy by reference


// Deep Copy 
let ano_arr = [5,6,7];
let ano_arr2 = Object.assign([], ano_arr);
console.log(ano_arr);  // output [5,6,7]
console.log(ano_arr2); // output [5,6,7]
ano_arr2[1] = 8;
console.log(ano_arr); // output [5,6,7]
console.log(ano_arr2); // output [5,8,7]

console.log(window);
