console.log("Working"); 

//Creating an element 
const newDiv = document.createElement("div"); // returns an element
console.log(newDiv); // <div></div>
const newanchor = document.createElement("a");
console.log(newanchor);

//Setting attributes -> two params : ("attribute-type", "attribute-value")
newDiv.setAttribute("class", "dom-ele dom-com");
newDiv.setAttribute("id", "dom-id");
newanchor.setAttribute("href", "https://google.com");
newanchor.setAttribute("target", "_blank");

//Get element by ID 
const htmlEle = document.getElementById("h1-id");
console.log(htmlEle);

//Query Selector 
const queryEle = document.querySelector("h2");
console.log(queryEle);

//Setting styles to an element 
queryEle.setAttribute("class", "bg-warm");
queryEle.style.fontSize = "30px";

//Query Selector All 
const allQueryEle = document.querySelectorAll(".query-class");
console.log(allQueryEle); 

//task
const colorList = ["lightblue", "cornflowerblue", "lavender", "lightpink"];
//Solution
for(let i=0 ; i<allQueryEle.length; i++) {
    allQueryEle[i].style.backgroundColor = colorList[i];
}

//Inner HTML 
newDiv.innerHTML = `
<h1>DOM Element</h1>
`;
newDiv.innerHTML += `
<p>This element is created in JS-DOM</p>
`;
//Inner Text -> only for adding text 
queryEle.innerText += "Google    1";
queryEle.textContent += "Text    Changed in JS";
console.log(queryEle.innerText);
console.log(queryEle.textContent);

//Append Child (Old Method)
//returns and adds only a single node of element 
const newDivArea = document.createElement("div");
newDivArea.setAttribute("class", "new-area");
const app_child = document.body.appendChild(newDivArea);
console.log(app_child); 

//Append (New Method) 
//returns only undefined but can add multiple nodes and text
//by comma seperated values
const app = newDivArea.append(newDiv, newanchor, "  Text also can be added");
console.log(app); //undefined 