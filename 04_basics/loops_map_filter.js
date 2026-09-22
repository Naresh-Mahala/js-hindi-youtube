//jo already aata tha... if-else, for,while,do-while, vo sab nhi likha hai...
//map, filter & reduce ko likh leta hu bs..

const coding= ["js","cpp","java","pyathon","ruby"]

// const values= coding.forEach( (item)=>{
//     // console.log(item);
//        return item
// } )

// console.log(values); forEach return nhi krta aise..

const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.filter( (item) =>item<8); //condition true hone pr return
// const newNums= myNums.filter( (item) =>{return item<8});
// const newNums= myNums.filter( (item) =>{item<8}); //{ } lga diya ab to return likhna hi pdega


// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBook = books.filter( (obj) => obj.genre==="Science")
//   let userBook = books.filter( (obj) => obj.genre==="Science").filter((obj)=>obj.publish>2010)
//   let userBook = books.filter( (obj) => obj.genre==="Science" && obj.publish>2010)
//   let userBook = books.filter( (obj) => obj.title[0]==='B')
//   console.log(userBook);
  
//map
const myNumbers= [1,2,3,4,5,6,7,8,9,10]

// const newNumbers= myNumbers.map( (item)=>{
//     return item -item
// } )

// const newNumbers= myNumbers.map( (item)=> item +100 )

const newNumbers= myNumbers
                        .map( (item)=>item*11 )
                        .map( (item)=>item-1 )
                        .filter( (item)=> item<55)
// console.log(newNumbers);


//reduce
/*
syntax
const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
    );
    */

   const number=[1,2,3]

   //    let total=number.reduce((acc,curr_val)=>{
   //             return acc+curr_val
   //    },0)

//    let total=number.reduce((acc,curr_val)=>acc+curr_val,0)

//    console.log(total);

const shoppingCart =[
    {
        itemName:"DSA",
        price: 3
    },
    {
        itemName:"cpp",
        price: 1
    },
    {
        itemName:"c",
        price: 2
    },
    {
        itemName:"Web Dev",
        price: 3
    },
]

const price_to_pay = shoppingCart.reduce( (acc,curr)=> acc + curr.price,20)// 20/- gst 
   
console.log(price_to_pay);
