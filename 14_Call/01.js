//working of call method

//call method passes our current execution context to some other method

//in the following example this passed as a funtion argument is used to hold the current execution context
//otherwise the execution context would be gone from stack once the function executes
//if not used this then the function would not work properly

function SetUserName(username){
    //complex DB calls
    this.username=username
    console.log("called")
}

function createUser(usernmae,email,password){
    SetUserName.call(this,usernmae)

    this.email=email
    this.password=password
}

const Ayush=new createUser("Ayush","ayush@gmail.com","123")
console.log(Ayush)