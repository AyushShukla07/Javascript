//Nullish Coalescing Operator(??):null undefined

let val1
val1=5??10//5
val1=null??10//10
val1=undefined??15
val1=null??10??20//10

//it is used in order to protect the code from null or undefined return values from backend if any of these values are recieved from backend then in place of 5 any other function is defined which will be executed t that time

//ternaery operator
const iceTreePrice=100
iceTeaPrice>80?console.log("less that 80"):console.log("greater than 80")