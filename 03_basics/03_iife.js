//Immediately Invocked Function Expresions (IIFE)

(function chai(){
 //named IIFE
 console.log(`DB CONNECTED`);
})();// 2 iife likh rhe ho to semicolon lgaana jaruri hai

(()=>{
 //named IIFE
 console.log(`DB CONNECTED AGAIN`);
})();

((name)=>{
 //named IIFE
 console.log(`${name} DB CONNECTED AGAIN`);
})("Naresh");