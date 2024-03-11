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

// Filter 
console.log("------Filter------");
const filter_Arr = mrf_arr.filter((val,index,
accArr) => {
    console.log(`
    Value : ${val}
    Index : ${index}
    accArr : ${accArr}
    `);
    return val != 4; 
});
console.log(mrf_arr);
console.log(filter_Arr);

//polyfill for filter 
Array.prototype.guviFilter = function (fn) {
    let newArr = [];
    for (let i=0; i<this.length; i++) {
        if (fn(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

console.log("------Guvi Filter------");
const guviFilter_Arr = mrf_arr.guviFilter((val, index,
accArr) => {
    console.log(`
    Value : ${val}
    Index : ${index}
    accArr : ${accArr}
    `);
    return val != 4; 
});
console.log(mrf_arr);
console.log(guviFilter_Arr); 

// Reduce 
console.log("------Reduce-----");
// [1, 2, 3, 4, 5] , number, "string", [], {} 
// var acc -> variable for storage 
const reducedvalue = mrf_arr.reduce((acc, val, index, accArr) => {
    console.log(`
    Value : ${val}
    Index : ${index}
    accArr : ${accArr}
    `);
    return (acc += val);
}, 0);
console.log(mrf_arr);
console.log(reducedvalue); 

//polyfill for reduce 
Array.prototype.guviReduce = function (fn) {
    let newArr = [];
    for (let i=0; i<this.length; i++) {
        if (fn(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

console.log("------Guvi Reduce------");
const guviReduced_Arr = mrf_arr.guviReduce((acc, val, index,
accArr) => {
    console.log(`
    Value : ${val}
    Index : ${index}
    accArr : ${accArr}
    `);
    return (acc += val);
}, 0);
console.log(mrf_arr);
console.log(guviReduced_Arr); 

// Chaining of MRF 
const dummyArr = [1, 2, 3];
const res = dummyArr
.map((val) => val+3)
.filter((val) => val != 4)
.reduce((acc, val) => {
    return (acc+= val);
}, 0);
console.log(res); 

// TASK 
console.log("------TASK------");
const batch = [
    {
        studname: "Harish",
        marks: 67,
    },
    {
        studname: "Linga",
        marks: 52,
    },
    {
        studname: "Aara",
        marks: 23,
    },
    {
        studname: "Gan",
        marks: 17,
    },
];

// Add internal marks 15 for all students 
// filter out the passed students (pass marks: 35)
//average marks of passed students in batch()
//avg = totalpassmarks/totalpassedstudents 

console.log(batch); 
function getStudentsPassPercentage(studArr,internalMarks) {
    const result = studArr
    .map((val) => val.marks + internalMarks)
    .filter((val) => val >= 35)
    .reduce(
        (acc, val, index) => {
            acc.totalMarks = acc.totalMarks + val;
            acc.totalPassedStudents = index + 1;
            acc.avgMarks = acc.totalMarks / acc.
            totalPassedStudents
            return acc;
        },
        {totalMarks:0 , totalPassedStudents:0, avgMarks:0}
    );
    console.log("Average Marks", result.avgMarks.toFixed(2));
}
getStudentsPassPercentage(batch, 15);