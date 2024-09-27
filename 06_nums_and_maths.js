let score = 222;
console.log(score);

let balance = new Number(100);
console.log(balance);   // 100

console.log(balance.toString().length); // 3

console.log( balance.toFixed(2));  // 100.00

const anotherNum = 23.3457; 
console.log(anotherNum.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++++++++++  Math  ++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-6));  // 6
console.log(Math.round(4.8));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));

console.log(Math.sqrt(144));
console.log(Math.pow(12, 2));

console.log(Math.min(4,7,3,9));
console.log(Math.max(4,7,3,9));


// Most important one
console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // IMPORTANT 

