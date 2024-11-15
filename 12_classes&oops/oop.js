// object literals

const user={
    username:"Ayush",
    logincount:8,
    signedIn:true,

    getuserdetails:function(){
        console.log("Got user details from database")
        console.log(`Username:${this.username}`)
        console.log(this)//return the current vobject
    }
}

console.log(user.username)
console.log(user.getuserdetails())
console.log(this)//return an empty object {}

//Constructor Function
//new is a constructor function
//new is used to create various instances using single object literal

function User(username,logincount,isLoggedIn){
    this.username=username
    this.logincount=logincount
    this.isLoggedIn=isLoggedIn

    return this  //return the entire object
}

const u1=User("AYUSH",12,true)
const u2=User("SHUKLA",21,false)
console.log(u1)

//u2 will overwrite the value of u1 and u2 will be printed as an object which is not good
//in order to prevent this we use new keyword

function User(username,logincount,isLoggedIn){
    this.username=username
    this.logincount=logincount
    this.isLoggedIn=isLoggedIn

    this .greeting=function(){
        console.log(`welcome ${this .username}`)
    }

    return this  //return the entire object
}

const u_1=new User("AYUSH",12,true)
const u_2=new User("SHUKLA",21,false)
console.log(u_1)

//if we do not write return this then also objects will be returned

//read for instance of in mdn

