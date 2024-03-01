// Question 2 and 3 : 
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

// Question 1 :
let obj1 = {name: "Person 1", age: 5};
let obj2 = {age: 5, name: "Person 1"};

let stringifiedObj1 = JSON.stringify(obj1);
let stringifiedObj2 = JSON.stringify(obj2);

let sortedObj1 = stringifiedObj1.split('').sort().join('');
let sortedObj2 = stringifiedObj2.split('').sort().join('');

if (sortedObj1 === sortedObj2) {
    console.log("Objects have the same properties");
} else {
    console.log("Objects do not have the same properties");
};