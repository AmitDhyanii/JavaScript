// function sum(num1, num2){
//     return num1 + num2;
// }
// console.log(sum(2, 3));



function isLoggedIn(username = "Dabbi") {
    if(!username)
    {
        console.log("Please enter a username");
    }
    return `${username} just logged in`;
}
// console.log(isLoggedIn("Amit"));
console.log(isLoggedIn());




// function calculateCartPrice(a){
//     return a;
// }
// console.log(calculateCartPrice(100, 200, 400));

// same using rest operator
function calculateCartPrice(val1, val2, ...a){
    return a;
}
console.log(calculateCartPrice(100, 200, 400, 500));



// function with object
let user = {name: "Amit", age:23};
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
}
// handleObject(user);
handleObject({name:"Eren", age:19});



// function with array
let arr = [100, 200, 300, 400];
function secondValue(getArr){
    return getArr[1];
}
// console.log(secondValue(arr));
console.log(secondValue([1000, 2000, 3000, 4000]));


