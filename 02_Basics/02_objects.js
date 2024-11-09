//singleton object is created when constructer is created and singleton object is not created when object is created using variables
//singleton is also created using Object.create


//Object Literals

const mysym=Symbol("key1")

const js_user={
    name:"Ayush",//js will consider name as string"name
    "full name":"Ayush Shukla",
    [mysym]="mykey1",
    age:21,
    isLoggedIn:false,
    lastLoggedIn:["Mon","Wed"]

}

//Accessing objects
console.log(js_user.name)
console.log(js_user["name"])
console.log(js_user["full name"])//we cannot access full name using dot operator
console.log(js_user[mysym])//here the type is symbol and if the square brackets are not used then the type will become the type of value stored in symbol

js_user.age=24//updating elements of objects
Object.freeze(js_user)//now no updation can take place 

//Adding functions

js_user.greeting=function(){
    console.log("Hello JS user");
}
jsu

