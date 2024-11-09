// IIFE-Immediately Invoked Functions Expressions
// to remove pollution from global scope we use iife

//named iife
(function chai(){
    console.log(`DB CONNECTED`)
})();//similarly like chai()
//here semicolon is important in order to know the end of function execution
//simple iife
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('Ayush')

//when we write two iife together we have to make sure that semicolon is present after first iife