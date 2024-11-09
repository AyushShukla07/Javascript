//singleton object is created when constructer is created and singleton object is not created when object is created using variables
//singleton is also created using Object.create


//Object Literals

const mysym=Symbol("key1")

const js_user={
    name:"Ayush",//js will consider name as string"name
    "full name":"Ayush Shukla",
    // mysym:"mykey1",
    age:21,
    isLoggedIn:false,
    lastLoggedIn:["Mon","Wed"]

}

//Accessing objects
console.log(js_user.name)
console.log(js_user["name"])
console.log(js_user["full name"])//we cannot access full name using dot operator
// console.log(js_user[mysym])//here the type is symbol and if the square brackets are not used then the type will become the type of value stored in symbol

js_user.age=24//updating elements of objects
Object.freeze(js_user)//now no updation can take place 

//Adding functions

js_user.greeting=function(){
    console.log("Hello JS user");
}
js_user.greeting2=function(){
    console.log(`Hello JS user ,${this.name}`)
}

console.log(js_user.greeting())
console.log(js_user.greeting2())

const tinderuser=new Object()//singleton
const tinderuser2={}//non-singleton 
//output of both the objects will be same an empty object{}

tinderuser.id="1234"
tinderuser.name="Ayush"
tinderuser.isLoggedIn=false

console.log(tinderuser)

const regularUser={
    email:"ayush@email.com",
    fullname:{
        userfullname:{
            firstname:"Ayush",
            lastname:"Shukla"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

//merging two objects
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3=Object.assign({},obj1,obj2)//here{} is the target object and obj1 and obj2 are the source objects
console.log(obj3)
//using spread operator
const obj4={...obj1,...obj2}
console.log(obj4)

//values come from database in form of an array of objects

const user=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    }
]
//Acessing values
console.log(user[1].email)

console.log(Objects.keys(tinderuser))//returns all the keys of objects in form of an array and all array manipulations are valid
console.log(Objects.values(tinderuser))//returns all the values
console.log(Objects.entries(tinderuser))//returns all key value pairs as an array of single arrays of key and values pairs[[],[]]
console.log(tinderuser.hasOwnProperty('isLoggedIn'))//returns true
console.log(tinderuser.hasOwnProperty('isLogged'))//returns false

//Destructuring objects

const course={
    coursename:"java_script",
    courseprice:999,
    courseInstructor:"Ayush"
}

const{courseInstructor}=course
console.log(courseInstructor)//here we can use courseinstructor insted of using dot operator and if we want to use any other name for printing we can give another name in the following way

const{courseInstructor:instructor}=course
console.log(instructor)//both console logs will give the same output

//API is something like giving our work to some other person
//values from backend come in form of JASON-jason is an object without name

// JASON--Javascript Object Notation

// {
//     "name":"Ayush",
//     "coursename":"javascript",
//     "isloggedin":false
// }

//here keys and value pairs are given in form of strings
//sometimes we can recieve an api in form of an array

[
    {},
    {},
    {}
]


//Random-user API

// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }


//we can use online jason formatters to know that meaning of values returned from the backend

