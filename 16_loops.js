const arr = ["Jan", "Feb", "March", "April", "May", "june"]
// for loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// while loop
// let i = 0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }


// do while loop
// let i = 0;
// do{
//     console.log(arr[i]);
//     i++;
// }
// while(i<arr.length)


// map => same like object but do not take duplicate value and 
//         if given then it will return unique values
// let map = new Map();
// map.set('IN', "India");
// map.set('Ger', "Germany");
// map.set('Fr', "France");
// map.set('IN', "India");
// console.log(map);

// for of loop on map object
// for (const [key , value] of map) {
//     console.log(key, ':-', value);
// }


// for of loop on object    // user is not iterable => typeError
// let user = {name:"Amit", age:23};
// for (const [key, value] of user) {  
//     console.log(key, ':-', value);
// }


// for in loop on object
let lang = {
    js: "Javascript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby"
};
// for (const key in lang) {
//     // console.log(key);  // to print key
//     // console.log(lang[key]);  // to print values
//     console.log(`${key} is for ${lang[key]}`)
// }

// for in loop on array
// for (const key in arr) {
//     console.log(arr[key]);
// }


// for of versus for in
// for of give values of array or object but
// for in give us key of array or object


// forEach loop  => does not return value only console the value
let anime = ["Bleach","AOT","JJK","CSM","OPM"];
// anime.forEach(function (item) {
//     console.log(item);
// });

// using arrow function
// anime.forEach( (item) => {
//     console.log(item);
// });

// anime.forEach( (item) => console.log(item));


// anime.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// });


let codingLanguage = [
    {
        languageName: "Javascript",
        languageExtension: "js"
    },
    {
        languageName: "Java",
        languageExtension: "java"
    },
    {
        languageName: "Python",
        languageExtension: "py"
    }
];
codingLanguage.forEach( (item) => {
    console.log(item.languageName)
});

// bcoz foreach does not return the value we use map, filter reduce





