// js is dynamically typed language

// Primitive Datatypes
//      Number => number
//      String  => string
//      Boolean  => boolean
//      null  => object
//      undefined  =>  undefined
//      Symbol  =>  symbol
//      BigInt  =>  bigint

// Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  //


// stack (primitive), heap (non-primitive)

// stack = copy(call by value)
// heap = reference(call by reference)


// stack example
let realName = "Amit";
let name = realName;    // assigned with the copy of realName
name = "Dabbi";

console.log(realName);
console.log(name);


// heap example with object
let user1 = {name : "Amit Dhyani", age : 23};

let user2 = user1;   // direct refrence to user1

user2.name = "Dabbi";

console.log(user1);
console.log(user2);

// heap example with array
let arr1 = ["Roman", "Greek", "Viking", "Persia"];
let arr2 = arr1;
arr2[2] = "Israel";
console.log(arr1);
console.log(arr2);
