//the promise object represents the eventual completion or failure of an asynchronous operation and its resulting value
//a promise is one of the three states:
//-pending:initial state neither fullfilloed nor rejected
//fullfilled:meaning that the operation was completed sucessfully
//-rejected:meaning that the operation failed

//creating promises

const promiseOne=new Promise(function(resolve,reject){
    //do async task
    //DB calls,cryptography,network calls
    setTimeout(function() {
        console.log('Async task is completed')
        resolve()//this connects promise one with .then
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

//OR

new Promise(function(resolve,reject){
    //do async task
    //DB calls,cryptography,network calls
    setTimeout(function() {
        console.log('Async task 2 is completed')
        resolve()//this connects promise one with .then
    }, 1000);
}).then(function(){
    console.log("Promise 2 consumed")
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function() {
        resolve({username:"Ayush",email:"ayush@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
})

//resolve returns an object

const promiseFour=new Promise(function(resolve,reject){
   setTimeout(function() {
    let error=true
    if(!error){
        resolve({username:"hitesh",password:"123"})
    }else{
        reject('ERROR : something went wrong')
    }
   }, 1000);
})

promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("The promise is either rejected or resolved"))

//one value returned from first then is recieved in another then
//finally will occur always

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function() {
     let error=true
     if(!error){
         resolve({username:"Ayush",password:"123"})
     }else{
         reject('ERROR : something went wrong again')
     }
    }, 1000);
 })

 async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
 }

 consumePromiseFive()

 async function getAllUsers(){
    try{
      const response=await fetch('https://jsonplaceholder.typicode.com/users')

      const data=await response.json()
      console.log(data)
    }
    catch(error){
        console.log("E",error)
    }
 }
 getAllUsers()

 //OR

 fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))


//  the global fetch() method starts a process of fetching a resource from the network returning  promise which is fullfilled once the response is available
//a fetch() promise only rejects when a network error is encountered (which is usually when there is a permission issue pr similar)
//a fetch() promise does not reject on HTTP errors(404 etc).instead a then() handler must check the respone .ok and/or response.status properties
//fetch forms micro-operation or priority queue and thus it performs all the funtions on fastest priority basis
