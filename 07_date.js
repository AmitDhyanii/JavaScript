// date is an object

let myDate = new Date();

console.log(myDate);
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toString());
console.log(myDate.toUTCString());

console.log(myDate.getTime());
console.log(myDate.setTime(1000));
console.log(myDate.getTime());

console.log(myDate.toLocaleString()); 

//
let createDate = new Date("01-16-2024");
console.log(createDate.toLocaleString());
console.log(createDate.getTime());

//
let timeStamp = Date.now();
console.log(timeStamp);

console.log(Math.floor(Date.now() / 1000));


let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());

console.log(newDate.toLocaleString());



