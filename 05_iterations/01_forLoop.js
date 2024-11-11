//for loops

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

//can change all index to any particular variable by pressing ctrl + D and selecting all the values that arr to be changed
for (let i= 0; i< array.length; i++) {
    const element = array[i];
    
}

for (let i = 0; i < array.length; i++) {
    console.log(`Outer loop value ${i}`)
   for (let j = 0; j < array.length; j++) {
   console.log(`Inner loop value ${j} and Outer loop value ${i}`)
   } 
}

//break is used to break the control flow of execution
//continue is used to skip a particular code of execution