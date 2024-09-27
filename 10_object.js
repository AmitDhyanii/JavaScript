// constuctor = singleton => created using object.create
// literal = no singleton


// object literals =>

const mySym = Symbol("key1");

let myObj = {
    name: "Amit",
    "full name": "Amit Dhyani",
    [mySym]: "mykey1",
    age: 22,
    address: "Dharuhera",
    email: "dhyani66@gmail.com"
};

// console.log(myObj);
// console.log(myObj.email);
// console.log(myObj["email"]);
// console.log(myobj.full name);   give error
// console.log(myObj["full name"]); // works fine
// console.log(myObj[mySym]);



// myObj.email = "amit0334@gmail.com";
// console.log(myObj);

// Object.freeze(myObj);
// myObj.email = "dhyani0334@gmail.com";
// console.log(myObj);

myObj.greeting = function() {
    console.log("Hey!");
}
myObj.greeting2 = function() {
    console.log(`Hey! ${this.name}`);
}

myObj.greeting();
myObj.greeting2();





