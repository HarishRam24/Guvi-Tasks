let arr = ["harish", 1, true, { pos: "student"} ];
console.log(arr[3].pos);

//objects (JSON- javascript object notation)

let obj = {
    name: "harish",
    value: 1,
    isMember: true,
    posArr: ["harish", 1, true],
};

// dot operation:
console.log(obj.value);
console.log(obj.name);

// map operation:
console.log(obj["isMember"]);
console.log(obj["posArr"]);


// let xhr = new XMLHttpRequest();
// console.log(xhr);
// xhr.open("GET", "https://restcountries.com/v3.1/all");
// xhr.send();
// xhr.onload = function () {
//     const data = JSON.parse(xhr.response);
//     console.log(data[0]);
// }; 


let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data);
  for (let i=0; i<data.length; i++){
    console.log(data[i].flag); // Print the flags 
    console.log(data[i].name.common); // Print all the names
    console.log(data[i].region); // Print the regions
    console.log(data[i].subregion); // Print the subregions
    console.log(data[i].population); // Print the population
  }
};

// console.log(data[i].name.common);
// Task 1 - Day 3:  
  const obj1 = { name: "Person 1", age:5 }; 
  const obj2 = { age:5, name: "Person 1" };

  if (obj1.name===obj2.name) 
  { console.log ("true"); 
}

