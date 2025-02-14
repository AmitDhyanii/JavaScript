// promise


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('async task 1 completed');
//         resolve();
//     }, 1000)
// })
// .then(() => {
//     console.log('promise 1 resolved');
// });


// new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve({username:"Amit", age:23, address: "Dharuhera"});
//     }, 1000);
// })
// .then((users) => {
//     console.log(users);
// });



// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve([{username:"Amit Dhyani", age:23},{username:"LawLess Gaming", age:33}]);
//     },1000)
// })
//.then((users)=>{
//     console.log(users[1].username)
// })



// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve([{username:"Amit Dhyani", age:23},{username:"LawLess Gaming", age:33}]);
//     },1000)
// })
// .then((users)=>{
//     users.forEach((user)=>{
//         console.log(user.username);
//     }) 
// })



// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({username: "Amit dhyani", age:23, adress: "Dharuhera"});
//     }, 1000);
// })
// .then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username);
// })


// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         if(!true)
//         {
//             resolve({username: "Amit", age: 23, address: "Dharuhera"});
//         }
//         else
//         {
//             reject('Oops something went wrong');
//         }
//     }, 1000);
// }).then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log('promise is either rersolved or rejected');
// });



// const promisePractice = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(!true)
//         {
//             resolve({username: "Amit", age: 23, address: "Dharuhera"});
//         }
//         else
//         {
//             reject('oops something went wrong');
//         }
//     }, 1000);
// });
// async function consumePromisePractice() {
//     try
//     {
//         const response = await promisePractice;
//         console.log(response);
//         console.log(`Age: ${response.age}`);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }
// consumePromisePractice();


// async function practice() {
//     try{
//         const response = await fetch('https://api.escuelajs.co/api/v1/products');
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error)
//     {
//         console.log('oops something went wrong');
//     }
// }
// practice();


// fetch('https://api.escuelajs.co/api/v1/products')
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((error) => console.log(error));


// hoisting var, let, const


// console.log(a);

// greet();
// function greet() {
//     console.log('Hello there');
// }

// var a = 10;
// console.log(a);


// arrow function and this

// const func = () => {
//     console.log(`arrow function executed`)
// }
// func();

// const camera = {
//     price: 600,
//     weight: 2000,
//     myDes: function(){
//         return `Camera price is ${this.price}`; // this is used for current context
//     }
// }
// console.log(camera.myDes());
// camera.price = 1200;
// console.log(camera.myDes());

// For those who wondering why we can't use arrow function there is because arrow function bind 'this' lexically which means they inherit 'this' keyword from their outer scope. In that example  in the video arrow function inheriting 'this' from 'cameras' object which is  "global window" object so when we access "this. price" we are accessing " "window.price" so because there is no property called price in global scope (on window object) we are getting "undefined". I hope this will help)

// const user = {
//     username: "Amit Dhyani",
//     age: 23,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage();
// user.username = "Dabbi";
// user.welcomeMessage();
// console.log(this);


// higher order function
// setTimeout, map, filter, reduce


// array destructuring 

// let arr = [1,2,3,4,5];
// let [a,b,c] = arr;
// console.log(a,b,c);

// let user = ["Amit", 23, "WebDev"];
// let [name, age, role] = user;
// console.log(name, age, role);

// object destructuring mostly used compared to array

// let obj = {x:6, y:8};
// let {x, y} = obj;
// console.log(x, y);

// const user ={
//     name:"Amit",
//     age: 23,
//     role: "WebDev"
// }
// const {name, age, role} = user;
// console.log(name, age, role);


// spread operator

// function sumOne(a, b){
//     return a + b;
// }
// let myArr = [2, 3];
// console.log(sumOne(...myArr));   // it spread the arr values like 2 3
// console.log(sumOne(2,3));

// rest operator

// function name(...a){
//     return a;
// }
// console.log(name(1,2,3,4,5,6,7));


// optional chaining => ?
// we use it in deeply nested object or array if we dont know value exist which we want to access

// const user = {
//     name: "Amit",
//     age: 23,
//     address: {
//         road: "Bass Road",
//         city: "Dharuhera",
//         state: "Haryana",
//         pincode: 123106
//     }
// }
// console.log(user.address.district?.place);


// if else and ternary operators using && and ||

// let age = 23;
// if(age>=18){
//     console.log('You can watch Berserk');
// }
// else if(age == 0){
//     console.log('Grow up Kidoo');
// }
// else{
//     console.log('You cannot watch Berserk');
// }

// ternary operator
// (condtion) ? true : false;

// let name = "Amit";
// name=="Amit  " ? console.log('Name is correct') : console.log('Name is wrong');


// map
// let arr1 = [2,5,6,9,4,1];
// console.log(arr1.map( (x, index, array) => {
//     console.log(x, index, array);
//     return x * 2;
// }));

// filter

// console.log(arr1.filter( (x) => {
//     return x % 2 ===0;
// }));

// reduce

// console.log(arr1.reduce( (acc, curr) => {
//     acc = acc + curr;
//     return acc;
// }, 0));

// sort

// console.log(arr1.sort())
// console.log(arr1.sort( (a,b)=>{
//     return a-b;   // sort the array
//     // return b-a;  // reverse the array
// }));


// onClick, onChange, onFocus, onBlur










