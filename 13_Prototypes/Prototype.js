 let myNmae="Ayush      "

 console.log(myNmae.trueLength)

 //Task is to create a new method which will return the true value of string after truncating all the spaces


 //creating our owm method

 let myHero=["thor","spiderman"]

 let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function{
        console.log(`spidy power is ${this.spiderman}`)
    }
 }

 Object.prototype.ayush=function(){
    console.log(`Ayush is present in all objects`)
 }

 Array.prototype.heyAyush=function(){
    console.log(`Ayush says hello`)
 }

 heroPower.ayush()//will execute
 myHero.ayush()//will execute
 myHero.heyAyush()//will execute
 heroPower.heyAyush()//will not execute

 //As object is in higher priority then all arrays string and functions can acces the method defined in an object
 //But a method defined in an array cannot be accessed by the object as array has lower priority rthan object and 
//Array passes throug object ,Object does not pass through array



//Inheritance


const User = {
   name: "chai",
   email: "chai@google.com"
}

const Teacher = {
   makeVideo: true
}

const TeachingSupport = {
   isAvailable: false
}

const TASupport = {
   makeAssignment: 'JS assignment',
   fullTime: true,
   __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

//linking of teacher support and teacher

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
   console.log(`${this}`);
   console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()