"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Greet(firstname) {
    return ("hello" + firstname);
}
console.log(Greet("Sarthak "));
function Addition(a, b) {
    return (a + b);
}
let ans = Addition(4, 5);
console.log(ans);
function legalAge(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(legalAge(15));
function delayedCall(Anfunction) {
    setTimeout(Anfunction, 1000);
}
function Log() {
    console.log("Hi There Sharma ");
}
delayedCall(Log);
// Comands to run tsc file first we have to 
// first have to convert into js file using npx tsc -b 
// Then we can run node index.js
//# sourceMappingURL=index.js.map