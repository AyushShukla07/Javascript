function func_name(){
    console.log("Hello");
    console.log("How are you?");
}

func_name//this is function reference
func_name()//this is function execution

function add_nums(num1,num2){//parameters
    console.log(num1+num2)
}
add_nums(3,4)//arguments


function add_nums(num1,num2){
    let result=(num1+num2)
    return result
}
const output=add_nums(3,4)
console.log(output)

//scope of both the result variables is different

//code block after return statements are never executed and a stement of unreachable code is given

function loginUserMessage(username="Ravi"){

    if(username==undefined){
        console.log("Enter a username")
        return//no further code will be executed
    }
    return `${username} just logged in`//string interpolation
}
console.log(loginUserMessage("Ayush"))

//here if no argument is provided then Ravi will be used other wise the value of argument will overwrite the value of parameter
//in such situations if statement will never be executed

//Rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,4000))//will return an array of arguments passed
 
function calculateCartPrice(var1,var2,...num1){
    return num1
}
console.log(calculateCartPrice(200,300,4000))//200 to var1,300 to var2 and rest values will be passed as an array

//passing object into functions

const user_func={
    username:"Aysush",
    price:1999
}
function handleObjects(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObjects(user_func)
//Another way of passing objects into functions
// handleobjects({
//     username:"Aysush",
//     price:1999
// })

//passing array to function

const myNewArray=[200,300,400] 
function returnSecondvalue(getarray){
    return getarray[1]
}
console.log(returnSecondvalue(myNewArray))
//Another way
console.log(returnSecondvalue([200,300,400]))