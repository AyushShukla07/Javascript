//numbers and maths

const score=400
console.log(score)//400

const balance=new Number(100)//specifically defining to number type
console.log(balance)//[Number:100]

//converting it to Number it allows ypu to have some additional properties
console.log(balance.toString().length)//3
console.log(balance.toFixed(2))//100.00

const othernumb=123.8965
console.log(othernumb.toPrecision(4))//123.9

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))//applies commas according to indian standards to the numbers so that the counting becomes easy

//Numbers provide various values like min value,max value,min safe value,max safe value

//Maths

//maths class provide various maths functions and we can access them using . operator
//Math.abs()
//Math.round()
//Math.floor()
//Math.ceil()
//Math.min(1,2,3,4,5)
//Math.max(1,2,3,4,5)
//Math.random() 
console.log((Math.random()*10)+1)//for avoiding 0 value
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)//giving values between 10 and 20


