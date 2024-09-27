// array = shallow copy || share same reference


let arr = [0,1,2,3,4,5,6];
// console.log(arr[1]);

let Heroes = ["krishh","Shaktimaan","Doga","Naagraj"];
// console.log(Heroes[0]);

let arr1 = new Array(1,2,3,4,5,6);
// console.log(arr1[4]);



// Array Methods

// push will add an element at the end of an array
arr.push(7);
console.log(arr);

// pop will remove an element from the end of an array
arr.pop();
console.log(arr);

// unshift will add an element at the start of an array
arr.unshift(0);
console.log(arr);

// shift will remove an element from the start of an array
arr.shift();
console.log(arr);

// includes check if the element is present or not in boolean values
console.log(arr.includes(10));

// indexof tells the index of an element
console.log(arr.indexOf(6));

// join will turn array into string
console.log(arr.join());

// slice & splice

// slice does not manipulate the real array
console.log(arr.slice(2, 5));
console.log(arr);

// splice does manipulate the real array
console.log(arr.splice(2, 4));
console.log(arr);


