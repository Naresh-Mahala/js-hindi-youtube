function sayMyName(){
    console.log("N");
    console.log("a");
    console.log("r");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 +number2);
    
// }

function addTwoNumbers(number1,number2){
    return number1 +number2
}

// console.log("Result :",addTwoNumbers(2,4));

function loginUserMassage(username="sam"){
      if(!username){
        console.log(`Please enter a name`);
        return        
      }
      return `${username} just logged in.`
}

// console.log(loginUserMassage("Naresh"));
// console.log(loginUserMassage(""));
// console.log(loginUserMassage());

// function calculatecartPrice(val1,val2,...num1){
//           return num1;
// }

// function calculatecartPrice(...val2,...num1){ //error... rest parameter must be last parameter
//           return num1;
// }

// console.log(calculatecartPrice(100,200,300,400));
// console.log(calculatecartPrice(100));
// console.log(calculatecartPrice(100,200));

const user ={
    username: "Naresh",
    prices: 1111
}

function handleObject(anyObject){
   console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
}

// console.log(handleObject(user));

// console.log({
//        username: "Naresh",
//     prices: 1111 
// });

// console.log(handleObject({
//        username: "Naresh",
//     prices: 1111 
// }));

const myNewArray=[1,2,3,4,5]

function returnSecondValue(anyArray){
    return anyArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1,2,3,4]));
console.log(returnSecondValue([1]));



