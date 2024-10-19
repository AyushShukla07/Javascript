console.log("2">1)//true
console.log("02">1)//true

//not a good practice and should be avoided as they are two different data types

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true

//outputs are due to in-consistency in language 

//the reason is that == and comparisons > < >= <= work differently.Comparision converts null to a number testing it against 0 and that is why null>=0 is true and null>0is false 

//in case of undefined all the three outputs are false

//strict check-->===  compares data types and value