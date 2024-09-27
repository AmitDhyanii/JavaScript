


let firstName = "Amit";
let lastName = "Dhyani";

console.log("My full name is " + firstName + " " + lastName);

// string interpolation
console.log(`My full name is ${firstName} ${lastName}`);

// Another way of declaring string
const gameName = new String("DEAD AMIT");
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase()); // toUpperCase()
console.log(gameName.charAt(2));
console.log(gameName.indexOf('A'));

console.log(gameName.substring(0, 4)); // it cant use negative values
console.log(gameName.slice(-11, 4));  // slice can use negative values 

const anotherName = "   Amit Dhyani   ";
console.log(anotherName.trim());


const url = "https://amit.com/amit%20dhyanii";
console.log(url.replace('%20', ''));

console.log(url.includes('dabbi'));  // return true or false

console.log(gameName.split(' '));  // string to array
