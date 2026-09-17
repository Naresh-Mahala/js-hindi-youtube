// const tinderUser =new Object()
const tinderUser ={}

tinderUser.id="123abc"
tinderUser["name"]="Naresh"
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser ={
    email: "naru@gamil.com",
    fullname: {
        userfullname:{
            firstname:"Naresh",
            lastname: "Mahala"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign(obj1,obj2,obj4)
// const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);

//objects ka array
const users=[
    {
     id:1,
     email:"n@gamil.com"
    },
    {
     id:1,
     email:"n@gamil.com"
    },
    {
     id:1,
     email:"n@gamil.com"
    }
]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  //useful
// console.log(Object.values(tinderUser));  
// console.log(Object.entries(tinderUser));  

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLog'));

const course ={
    coursename: "js in hindi",
    price : "999",
    courseReader : "Naresh"
}

// console.log(course.courseReader);//baar baar itna kyu likhna

const {courseReader}=course;

// console.log(courseReader);

const {courseReader:cr}=course; //kuch bhi naam de skte hai...
// console.log(cr);

//JSON api 
// {
//     "name":"Naresh",
//     "age": 22,
//     "status": "single"
// }

[
    {},
    {},
    {},
]

