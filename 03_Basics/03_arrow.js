const user={
    username:"Ayush",
    price:999,
    welcom_msg:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)//return the key value pairs of current context of objects
    }
}

//this keyword is used for current context
console.log(user.welcom_msg)
user.username="sam"
console.log(user.username)//value will be updated
console.log(this)//return {} empty object

//tis does not work with functions this generally is used in object manipulation

function chai(){
    const username1="Ayush"
    console.log(this.username)
}
chai()
//code will not execute and will throw an error

//Arrow functions

const chai=()=>{
    let username="Ayush"
    console.log(this.username)//output will bve undefined
}
chai()

const addtwo=(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(4,5))

// implicit return for one liner code

const add_two=(num1,num2)=>num1+num2
// const add_two=(num1,num2)=>(num1+num2)--output will be same
console.log(add_two(4,5))

const add__two=(num1,num2)=>({username:"Ayush"})
//returning an object