// map 
const nums = [1,2,3,4,5,6,7,8,9,10];
// const totalNum= nums.map( (item) => item + 10);
// console.log(totalNum);


// chaining
// const chain = nums.map( (item) => item * 10)
//                      .map( (item) => item + 1)
//                      .filter( (item) => item > 50);
// console.log(chain);


// filter
// const isEven = nums.filter( (item) => item % 2 == 0);
// console.log(isEven);

// const isOdd = nums.filter( (item) => item % 2);
// console.log(isOdd);

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const res = words.filter( (word) => word.length > 5);
// console.log(res);

const arr = [
    {
        animeName: "Bleach",
        launchYear: 2004,
        endYear: 2014,
        price: 1500
    },
    {
        animeName: "Attack On Titan",
        launchYear: 2013,
        endYear: 2023,
        price: 3000
    },
    {
        animeName: "Naruto",
        launchYear: 2002,
        endYear: 2017,
        price: 1000
    },
    {
        animeName: "Hunter X Hunter",
        launchYear: 2011,
        endYear: 2014,
        price: 1200
    },
];
// const result = arr.filter( (item) => item.launchYear >= 2010);
// console.log(result);



// reduce 
const sum = nums.reduce ( (acc, curr) => acc + curr, 0);
console.log(sum);

const max = nums.reduce((acc, curr) => curr>acc ? curr : acc, 0);
console.log(max);

const priceToPay = arr.reduce( (acc, item) => acc + item.price, 0);
console.log(priceToPay);







