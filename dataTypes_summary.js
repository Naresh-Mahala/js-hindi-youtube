//primitive
// 7 types-> string, number, boolean,null, undefined symbol, Bigint

//reference (non primitive)
// array, function, objects
  
/*
const heros=["naresh","samay","vicky"]

let myObj={
    name:"naresh",
    age:22,
}

const myFunction= function(){
    console.log("Hello World");
    
}
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);

*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive)     heap(non-primitive)
 // copy bnega           reference milega

 let obj_one={
    name:"naresh",
    age:22
 }

 let obj_two= obj_one

 console.log(obj_one);
 console.log(obj_two);
 
 
 obj_two.name="mahala";
 obj_two.age=23;
 
 console.log(obj_one);
 console.log(obj_two);
