const useremaii="ayush@gmail.com"
if(username){
    console.log("Got the email")
}
else{
    console.log("Does not get the email")
}

//falsy values
//false,0,-0,nan,null,undefined BigInt 0n,{}
//if these other values are present in conditional statement the logical output will be false

//truthy values
//"0",'false'," ",[],{},function(){}
//any other value other than stated falsy values are truthy values

const emptyobject={}
if(Object.keys(emptyobject).length===0){
    console.log("Object is empty")
}

false==''
false==0
0==''
//all these statements will return true