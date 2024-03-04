// var let and const:
// var
var a = 15;
var a = 25; 
console.log(a); 

// let
let b = 13;
// let b = 15; // not possible for re-declaration 
b = 15; // re-initialization is possible 
console.log(b); 

// const 
const c = 30;
// const c = 25; // not possible to re-declare
// c = 35; // not possible to re-initialize 
console.log(c); 

// block scope (let and const) :
if (true) {
    let a = 25;
    console.log(a);
}
// console.log(a) // this is error because this is outside the block
// same logic applies to const 

// var 
if (true) {
    var x = "harish";
    console.log("inblock", x);
}
console.log("outblock", x); // var can run both consoles from in block and out block


if(true) {
    let xyz = 30;
    //console.log(zyx); not possible (inner to outer block)
    if (true) {
        let zyx = 15;
        console.log("inner block", xyz); // outer to inner block possible 
    }
}

function scopeFunc() {
    let func_var = 36;
    // console.log(func_var) ; // inner to outer -> error 
    if (true) {
        // let func_var = 36;
        console.log(func_var); // outer to inner -> possible 
    }
}
scopeFunc();

// shadowing property 
if (true) {
    const shadow_var = "harish"; 
    if (true){
        const shadow_var = "ram";
        console.log("har block", shadow_var);
    }
    console.log("ram block", shadow_var);
}

// spread and rest operator 
//spread operator
const col_arr = ["mango", 5, "chocolate", "milk"];
console.log(col_arr);
console.log(...col_arr);

const batch1 = ["harish", "ram"];
const batch2 = ["linga", "aara"];
const batch3 = ["dharma", "karthik"];
const allStudents = [...batch1, ...batch2, ...batch3];
console.log(allStudents);

// rest operator 
function getAlldata(data1, data2, ...all) {
    console.log(data1);
    console.log(data2);
    console.log("remaining all", all);
}
getAlldata("har", "ish", "ram", "gan", "pan");

