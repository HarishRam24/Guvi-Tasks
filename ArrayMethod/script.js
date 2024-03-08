console.log("working"); 

// Methods in array 
const arr = [1, 23, 54, 6, 7, 9, 32];
console.log("----push method----");
arr.push(59);
console.log(arr); 
console.log("----pop method----");
arr.pop();
console.log(arr); 
console.log("----unshift method----");
arr.unshift(59);
console.log(arr); 
console.log("----shift method----");
arr.shift(59);
console.log(arr); 
console.log("----sort method----");
arr.sort((a,b) => a-b);
console.log("ascending", arr);
arr.reverse();
console.log("descending", arr);

// slice 
console.log("Original arr", arr);
// slice -> startIndex and endIndex 
// startIndex is included and endIndex is excluded 
const newArr = arr.slice(0,3); 
console.log("sliced arr", newArr);

// splice 
console.log("Original arr", arr);
// splice -> start, deleteCount, item1 ,item2 } contents in a splice
// arr.splice(1,2, "harish", "linga", 24); -> 1st element denotes where to start
// 2nd element shows how many index to delete, next items are additions made in the array
const splicedArr = arr.splice(1,2, "harish", "linga", 24);
console.log("After splice", arr);
console.log("Spliced from Original arr", splicedArr); // -> to see what was spliced

// MRF (Map, Filter, Reduce)
// Map returns a new array for given conditions 
// it also loops through the original array 

console.log("----MAP----");
const mrf_arr = [1, 3, 4, 5, 6, 7, 8, 9];
console.log("mrf arr", mrf_arr); 

const mapped_Arr = mrf_arr.map((value, index, accArr) => {
    console.log(`
    Value : ${value}
    Index : ${index}
    accArr : ${accArr}
    `);
    return value * 2;
}); 
console.log("mrf arr", mrf_arr);
console.log("mapped arr", mapped_Arr); 

// mrf_arr.map((value, index, accArr) => {});
//Polyfills 
Array.prototype.guviMap = function (fn) {
    let new_Arr = [];
    for (let i = 0; i<this.length; i++) {
        new_Arr.push(fn(this[i],i,this));
    }
    return new_Arr;
};

console.log("-----Guvi Map-----");
const guviMapped = mrf_arr.guviMap((value, index, accArr) => {
console.log(`
Value : ${value}
Index : ${index}
accArr : ${accArr}
`);
return value * 2;
});
console.log("mrf guvi array", mrf_arr);
console.log("Guvi array", guviMapped); 