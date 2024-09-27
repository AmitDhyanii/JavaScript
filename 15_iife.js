// immediately invoked function expression(IIFE)
// iife used for global memory garbage

(function code(){
    console.log("DB Connected");
})();  // semi column is necessary to use otherwise next function will give error
// first parenthesis for function definition
// second parenthesis for function execution

( () => {
    console.log(`DB Connected again`);
})();


( (name) => {
    console.log(`DB Connected again ${name}`);
})("Amit");



                        //  control flow

// switch statement => used in redux
const month = 3;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default: console.log("Not Exist");
        break;
}




// falsy value
// false, 0, -0, BigInt 0n , "", null, undefined, NaN

// truthy value
// "0", "false", " ", [], {}, function(){},


// to check if array is empty
const user = [];
if(user.length === 0) {
    console.log("Array is Empty");
}

// to check if object is empty
const emptyObject = {};
if(Object.keys(emptyObject).length == 0){
    console.log("Object is Empty");
}

// Nullish Coalesing Operator (??) : null undefined
let val1 = 5;
val1 = 5 ?? 10;             // 5
val1 = null ?? 10           // 10
val1 = undefined ?? 15      // undefined
val1 = null ?? 10 ?? 15     // 10

console.log(val1);



// ternary operator
// condition ? true : false




