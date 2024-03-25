//Higher order functions
// function which returns another function 
function higherOrderFunc(fn) {
    return fn;
}
function returnFunc() {
    console.log("I'm returned by another function");
}
const returns = higherOrderFunc(returnFunc);
console.log(returns);
returns(); 

//--------Callbacks---------//
//Guvi Enrollment Process 
// Course selection -> Student enrollment -> Payment -> Course Access

function courseSelection(cb) {
    console.log("Selection of course done {p1}");
    cb();
}
function studentEnrollment(cb) {
    setTimeout(() => {
        console.log("Student enrolled successfully {p2}");
        cb();
    }, 2000);
}
function paymentProcess(cb) {
    setTimeout(() => {
        console.log("Payment completed successfully {p3}");
        cb();
    }, 1000);
}
function accessToCourse() {
    console.log("Course access granted {p4}");
}

function guviEnrollment() {
    courseSelection(() => {
        studentEnrollment(() => {
            paymentProcess(() => {
                accessToCourse();
            });
        });
    });
}
guviEnrollment();