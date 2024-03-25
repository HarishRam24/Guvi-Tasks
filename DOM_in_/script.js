console.log("Working");
// window.alert("You will do the best")

// Alert
function alertMsg(msg) {
    // doesn't return anything 
    //but just gives an alert message in the browser
    // and blocks the next code
    alert(msg);
}
// alertMsg("Sample alert message");

//Prompt
function promptMsg(que,def) {
    //prompt returm the user written data or default value
    //if cancelled returns null
    const resultMsg = prompt(que, def);
    console.log(resultMsg);
}
// promptMsg("Hi what is your name?", "default value");

//Confirm 
function confirmMsg(checkMsg) {
    const resultMsg = confirm(checkMsg);
    console.log(resultMsg);
}
confirmMsg("Are you sure?");

const inputField = document.querySelector(".inp-box");
const get_btn = document.querySelector("#get-btn");
const userData = {};
get_btn.addEventListener("click", () => {
    userData.name = inputField.value;
    console.log(userData);
});

//Events
//mouse events (mousedown, mouseleave, mouseup)
document.addEventListener("mouseover", (e) => {
    console.log("mouse hovered", e);
});

//key events (keypress, keydown, keyup)
document.addEventListener("keydown", (e) => {
    console.log("key triggered = ", e.key);
});

//form events (submit, input, change)
const myForm = document.querySelector("form");
myForm.addEventListener("change", (e) => {
    e.preventDefault();
    console.log(e.target); 
});

//window events (load, resize)
window.addEventListener("resize", (e) => {
    console.log("window resized", e);
});

console.log(1);
console.log(1);
setTimeout(() => {
    console.log(2);
}, 1000);
console.log(3);
console.log(4);