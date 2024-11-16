class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUN(){
        return `${this.username.toUpperCase()}`
    }
}

const chai=new user("chai","chai@gmail.com","123")

console.log(chai.encryptPassword())
console.log(chai.changeUN())

//behind the scene

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());