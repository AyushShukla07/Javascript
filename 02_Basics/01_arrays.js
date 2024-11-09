//Arrays in javascript

//Array Declaration
const arr=[1,2,3,4,5]
//can have any other value of any other datya type like a string or a floating point number

//Another way of array declaration

const arr2=new Array(1,2,3,4)
console.log(arr[2]);

//Array methods
arr.push(e)//to push an element at the last position
arr.pop(e)//to pop an element from last position
arr.unshift(e)//adding an element in the starting
arr.shift()//rermoves an element from the starting
arr.includes(e)//returns a boolean value
arr.indexOf(e)//returns an integer value

const new_arr=arr.join()//joins two arrays and converts the type from arrays to string

arr.slice(startidx,endidx)//returns an array from starting position to ending position without including last one

arr.splice(si,ei)//returns an array from start index and excluding the end position and changes the original array popping out all the elements

arr.concat(arr2)//concatination of two arrays--returns a new array

//spread operator
const new_arr1=[...arr,...arr2]

const a1=[1,2,3,4,5,[6,7],8,[9,[10,11]]]

const another_array=another_array.flat(Infinity)//merges all recursive array into a single array but you have to give a depth till which all arrays have to be mearged here it is infinity

console.log(Array.isArray("Ayush"))//returns false
console.log(Array.from("Array"))//returns an array

console.log(Array.from({name:"Ayush"}))//returns an empty array because we have to specify what array we are wxpecting either it is an array of values or keys

console.log(Array.of(var_1,var_2,var_3))


