const id = 33;
let name = "Amit Dhyani";
var pass = "Amit@0334";
city = "dharuhera";
let state;

console.table([id, name, pass, city, state]);



// if possible try to use let or const over var
//var stored in global memory | global scope | hoisted | undefined placeholder
// let and const stored in script memory | block scope | hoisted | undefined placeholder


console.log(age);  // undefined
var age = 23;
console.log(age);  // 23

// var give undefined if we access variable before initialization but let const give error

sum(3,4);  // 7
function sum (a ,b){
    console.log(a+b);
}
sum(3,4);  // 7


// multiply2(11);  give error
var multiply2 = function(x){
    console.log(x*2);
}
multiply2(11);  // 22


// swap two numbers

let a = 12;  //5
let b = 9;   //3
a = a + b;  // 8
b = a - b;  // 3
a = a - b;  // 5
console.log(a);
console.log(b);


// let a = 4;
// let b = 7;
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log(a);
// console.log(b);

