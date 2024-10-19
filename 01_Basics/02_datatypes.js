"use strict"; //treat all js code as a newer version code

//alert(3+3)  //we are using nodejs and not browser so it will not show any pop up

console.log(5+6);console.log("Ayush")//it is effecting the readability and the code also does not looks good

//semicolon can be used aur may not be used and generally does not impact the code usnless written on different lines
console.log(5+6);console.log("Ayush")//this code will show an error if semicolon is not used between two console.log statements

//documentation--ecma tc39 and mdn

//DATATYPES

//number-->2 to power53
//bigInt-->to store number greater than the value of number
//string-->""
//null-->standalone value...it is not undefined but empty..it shows the variable is empty rather than undefined
//undefined-->value not assigned yet
//symbol-->for uniqueness of components
//objects

console.log(typeof "Ayush")
console.log(typeof null)//object
console.log(typeof undefined)//object

// -------------Second Part-------------

//primitive data types

//String Number Boolean null undefined Symbol BigInt

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)//false

//although values are same inside the symbol but both will be assigned a different value internally

const bigNum=776477478673736476736n
//n at last converts the number into bigInt


//JavaScript is a dynamically typed language, but TypeScript is a statically typed language. Longer answer: In dynamically typed languages all type checks are performed in a runtime, only when your program is executing

//reference (non primitive)
// Array,Objects,Functions

const num=["1","2","3","4"]//Array

let myobj={
    name:"Ayush",
    age:21
}//object

const myfunction=function(){
    console.log("Hello World");
}//typeof-->function object