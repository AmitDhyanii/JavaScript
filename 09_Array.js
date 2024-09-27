let protagonists = ["Eren","Lelouch","Light"];
let antagonists = ["Aizen","Doflamingo","Madara"];

// protagonists.push(antagonists);
// console.log(protagonists);
// [ 'Eren', 'Lelouch', 'Light', [ 'Aizen', 'Doflamingo', 'Madara' ] ]

// let both = protagonists.concat(antagonists);
// console.log(both);  
// [ 'Eren', 'Lelouch', 'Light', 'Aizen', 'Doflamingo', 'Madara' ]


// spread operator
let both = [...protagonists, ...antagonists];
console.log(both);
// [ 'Eren', 'Lelouch', 'Light', 'Aizen', 'Doflamingo', 'Madara' ]


let arr = [1,2,3,[4,5],6,[7,8,[1,2]]];
let arry = arr.flat(Infinity);
console.log(arry);

console.log(Array.isArray("Dhyani"));
console.log(Array.from("Dhyani"));

// cant change object to array coz it is asking either convert key or value and return empty array
console.log(Array.from({name:"Amit Dhyani"}));  


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
