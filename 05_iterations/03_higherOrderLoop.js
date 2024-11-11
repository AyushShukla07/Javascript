//for of loop

for (const element of object) {
    
}

const arr=[1,2,3,4,5]
for (const val of arr) {
    console.log(val)
}
//this loop can be implemented on an array or an array of strings or objects

const greetings="Hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

//Maps is a collection of unique key value pairs in which no repetition is there

const map=new Map()
map.set("IN","INDIA")
map.set("FR","FRANCE")

for (const key of map) {
    console.log(key)
}
//array of key value pairs will be printed

for (const [key,value] of map) {
    console.log(key,':-',value)
}
//here we have done destructuring of map and key value pairs are obtained differently

//for of loops and destructuring methods cannot be used to iterate objects

//to iterate for objects we use for in loop

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

const myObject={
    js:"javascript",
    cpp:"c++"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
    }

//for in loop can be used to iterate over arrays
//if we directly console log keys then only the index of array will be printed
//in order to print the values of the array we need to us array_name[key] in console log
//map is not iterable using for off and for in loop

//call back functions do not have a function name

const ar=[1,2,3,4,5,6]

ar.forEach( function (iterable_name){
    console.log(iterable_name)
})

//here we have used callback function and it a way of iterating over arrays which is widely used
//call back function can be any function like a normal function or an arrow function

ar.forEach( (iterable_name)=>{
    console.log(iterable_name)
})

function printme(item){
    console.log(item)
}
ar.forEach(printme)//we have to pass function reference only

//this method also has value of index and access of complete array at each step

ar.forEach((item,index,arr)=>{
  console.log(item,index,arr)
})

//array of objects

const arrayOfObjects=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

arrayOfObjects.forEach((iterable_name)=>{
    console.log(iterable_name.languageName)
})

//for each loop does not return any value

const a=[1,2,3,4,5,6,7,8]

const values=a.forEach( function (iterable_name){
    // console.log(iterable_name)
    return
})
console.log(values)//undefined will be printed

const newNums=a.filter( (num)=> {
   return num>4
})
console.log(newNums)//otp:[5,6,7,8]

//or

const newNum=a.filter( (num)=>  num>4)
 console.log(newNums)//otp:[5,6,7,8]

 //if we have started the scope then we have to use the return keyword

 const myNums=[]

 a.forEach((num)=>{
    if(num>4){
       myNums.push(num)
    }
 })
 console.log(myNums);

 //example of feteching data from database and utilising it

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

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);


  const numbers=[1,2,3,4,5,6,7,8,9]

  const new_Nums=numbers.map( (num)=>{
    return num+10
  })
  console.log(new_Nums)

  //chaining

  const new_num=numbers.map( (num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
  console.log(new_num)

  //we can use any number of such methods one by one

  //reduce

  const myNumber=[1,2,3]

  const myTotal=myNumber.reduce( function (accumulator,current_value){
    console.log(`accumulator ${accumulator} and current value ${current_value}`)
    return accumulator+current_value
  },0)
  console.log(myTotal)

//here we have used 0 as the initial value of accumulator and it is give after using comma at the end of function
//in place of 0 we can use any other value also

const my_Total=myNumber.reduce( (acc,cur_val)=>acc+cur_val,0)
console.log(my_Total)

//example of a shopping cart

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);