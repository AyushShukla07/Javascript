// var keyword is not used because it does not follow any scope
//any piece of code within the curly braces is known as block scope
//any piece of code outside curly braces is known as global scope


let a=20//global scope
if(true){
    let b=200//block scope
    let c=300//block scope
    console.log(b)
}

//value of a variable in global scope can be accessed anywhere in the code but value of bloock scope variable cannot be accessed anywhere in the code

//global scope in coding environment and in console of browser acts differently

//function nesting

function one(){
    const username="Ayush"
    function two(){
        const website="Youtube"
        console.log(username)
    }
    console.log(website)

    two()
}
one()

//here inner function can access all the variable of outer functions as they act as global variables but the outer function cannot access anu of the inner variables of inner functions as they act as block scope variables

if(true){
    const un="Ayush"
    if(true){
        const web=" Youtube"
        console.log(un+web)
    }
    console.log(web)
}
console.log(un)
//last two console logs will give errors as both will act as block scope variables

//Hoisting

function addone(num){
    return num+1
}
addone(5)

const addtwo=function(num){
    return num+2
}//this is an expression -- way of declaring a function
addtwo(5)

//here both functions will work normally

addone(5)
function addone(num){
    return num+1
}

add_two(5)
const add_two=function(num){
    return num+2
}
// here addone will work normally but add_two will throw an error