const user = {
    username: "Amit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);  // this for current context
        // console.log(this);
    }
};
// user.welcomeMessage();
// user.username = "Dabbi";
// user.welcomeMessage();

// console.log(this);



// function chai(){
//     console.log(this);
//     console.log(this.username);
// }
// chai();


// const code = function(){
//     console.log(this);
//     console.log(this.username);
// }
// code();

// arrow function
// const cc = () =>{
//     console.log(this);
//     console.log(this.username);
// }
// cc();


const sum = (a, b) =>{
    return a + b;  // explicit return
}
console.log(sum(3, 4));

// const addTwo = (a, b) => a + b;
// const addTwo = (a, b) => (a + b);  // implicit return
const addTwo = (a, b) => ({username: "Amit"});

console.log(addTwo(3, 4));

