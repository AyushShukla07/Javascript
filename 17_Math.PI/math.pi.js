const description=Object.getOwnPropertyDescriptor(Math,"PI")

//after comma we have to write the property whoese description we want

console.log(description)

//output

// {
//     value:3.1415926,
//     writable:false,
//     enumerable:false,
//     configurable:false
// }

//pi is a constant and thus its values is so deeply configured and various checks are applied over it that we cannot overwrite the value of pi


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

//turning the value of enumerable false we are also able to stop iterations

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}

//if we will not check for the function then it will be printed as it is defined
//objects are not iterable in many situations thus we are using object.entries to iterate over the obejct