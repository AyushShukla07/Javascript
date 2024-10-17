// node 01_Basic/03_datatypes_conversion.js

let score="33abc"
console.log(typeof score)

let value_in_number=Number(score)
//for type conversion we generally use keywords in capital letters
console.log(typeof value_in_number);
console.log(value_in_number);
//it will give output as number but when value will be printed it will give NaN as it is not an actual number but a combination of characters and integers

//conversions

//"33"-->33
//"33abc"-->NaN
//true-->1  or  false-->0


let is_logged_in="Ayush"
let boolean_is_logged_in=Boolean(is_logged_in)
console.log(boolean_is_logged_in)

//1-->true or 0-->false
//""-->false
//"abc"-->true

let num=33
let to_string=String(num)
console.log(typeof to_string)
console.log(to_string)
