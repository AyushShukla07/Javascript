//for strict checking ===(type and value checking both)

// if(condition){
//   block of code
// }
// else{
//   block of code
// }

//shorthand notation
 const balance=1000

 if(balance>500) console.log("Balance is not below minimum");
 //we place semicolon to terminate the line inorder to add more consolelogs use comma for seperations and then semicolon at last----generally not preffered


 const userLoggedin=true
 const debitCard=true
 const LoggedInFromGoogle=false
 const LoggedInFromEmail=true

 if(userLoggedin && debitCard){
    console.log("Allow to buy")
 }

 if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log("User logged in")
 }
 