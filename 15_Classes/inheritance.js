 class User{
    constructor(username){
        this.username=username
    }

    loginme(){
        console.log(`USERNAME is ${this.username}`)
    }
 }

 class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    
 }