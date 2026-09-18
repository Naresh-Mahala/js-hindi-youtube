const user={
    username:"Naresh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage();
// user.username="naru"
// user.welcomeMessage();

// console.log(this)

// function chai(){
//     let username="Naresh"
//     console.log(this.username)
// }


// const chai = function(){
//     let username="Naresh"
//     console.log(this.username)
// }

// chai()

// const chai=()=>{
//       let username="Naresh"
//     console.log(this) 
// }

// chai()

// const addTwo =(num1,num2)=>{
//     return num1+num2
// }

// const addTwo =(num1,num2)=> num1+num2

// const addTwo =(num1,num2)=> (num1+num2)


// const addTwo =(num1,num2)=> {user:"naresh"} //esko return kre ke liye ( ) lgaaye

const addTwo =(num1,num2)=> ({user:"naresh"}) 

console.log(addTwo(3,6))