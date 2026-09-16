// singleton
// Object.create

//obect literals
const mySym= Symbol("key1")

const JsUser={
    name: "Naresh",
    "full name":"Naresh Mahala",
    [mySym]: "mykey1", 
    age:18,
    location:"Jaipur",
    email: "naresh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email= "naresh@microsoft.com"
// Object.freeze(JsUser)  //ab changes nhi kr skte
// JsUser.email= "naresh@meta.com"

// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Heloo Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Heloo Js User, ${this["full name"]}`);
    console.log(`Heloo Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
