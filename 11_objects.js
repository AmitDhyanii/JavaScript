// singleton object
// const obj = new Object();
// console.log(obj);


// adding kay value in empty object 
const instaUser = {};
instaUser.name = "Amit Dhyani";
instaUser.password = "Amit@0334";
instaUser.isLoggedIn = false;

console.log(instaUser);
console.log(Object.keys(instaUser));  // Very Important & turn keys into array
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));



// nested objects
let regUser = {
    email: "amit33@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Amit",
            lastName: "Dhyani"
        }
    }
};
console.log(regUser.fullName.userFullname.firstName);

// Optional chaining => if fullname doesn't exist we use ? 
// example
// console.log(regUser.fullName?.userFullname.firstName);



// combining objects
let obj1 = {1:"a", 2:"b"};
let obj2 = {3:"b", 4:"c"};

// let obj3 = {obj1 , obj2};
// output => { obj1: { name: 'Luffy', age: 19 }, obj2: { name: 'Goku', age: 44 } }

// using assign
// let obj3 = Object.assign({}, obj1, obj2);

// using spread operator
let obj3 = {...obj1, ...obj2};
console.log(obj3);


const users = [
    {
        id: 1,
        name: "Amit"
    },
    {
        id: 2,
        name: "Eren"
    },
    {
        id: 3,
        name: "Aman"
    },
];

console.log(users[1].name);






