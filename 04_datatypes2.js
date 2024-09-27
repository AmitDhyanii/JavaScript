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


// heap example
let user1 = {name : "Amit Dhyani", age : 23};

let user2 = user1;   // direct refrence to user1

user2.name = "Dabbi";

console.log(user1);
console.log(user2);


