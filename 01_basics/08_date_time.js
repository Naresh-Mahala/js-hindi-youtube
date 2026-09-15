//
console.log("hi");

let myDate=new Date()
/*
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toString());
console.log(typeof myDate);
*/
// let createMydate= new Date(2004,8,20)
// console.log(createMydate.toDateString());
// console.log(createMydate.toLocaleString());
// console.log(createMydate.toString());

// let createMydate= new Date(2004,8,20,5,3) //month 0 se count
// console.log(createMydate.toDateString());
// console.log(createMydate.toLocaleString());
// console.log(createMydate.toString());

// let createMydate= new Date("2004-09-20") //isme month 0 se nahi
// console.log(createMydate.toDateString());
// console.log(createMydate.toLocaleString());
// console.log(createMydate.toString());

let createMydate= new Date("2004-09-20") 

let myTimestamp=Date.now(); //

// console.log(createMydate.getTime());//kitne ms ho chuke hai 1 jan 1970 se 20-09-2004 tak
// console.log(myTimestamp);// kitne ms ho chuke hai  1 jan 1970 ke baad (abhi tak)

/*
let birth_ms= myTimestamp-createMydate.getTime()

console.log(birth_ms);
console.log(birth_ms/(1000*3600*24*365));// kitne saal ka higya hu...ruffly idea dega.. floor use krke kbhi bhi integer bnaalo
*/

//or bhi kaafi function hai...




