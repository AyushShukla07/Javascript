document.getElementById('id_name')

document.getElementById('id_name').id

document.getElementById('id_name').getAttribute('id_name')

document.getElementById('id_name').getAttribute('class_name')

document.getElementById('id_name').setAttribute('class_name','attribute_name another_attribute_name')
//anotherAttribute Name is given when we require to have one or more class name to a single element

const title=document.getElementById('id_name')
//we can store the value of object in a variable and then use this variable for further manipulations
//now this variable acts as an object and this can be used to apply various styles
title.style.backgroundColor='green'
title.style.padding='15px'
title.style.borderRadius='10px'

//accessing content

title.textContent
title.innerHTML
title.innerText

//using innertext gives only that content which is visible but using innerhtml gives all those line of text which are visible and also those which are not visible
//innerhtml gives the content along with all the html tag

document.getElementsByClassName('class_name')

//querry selector

document.querySelector('h1')
//will give only first heading of the body
document.querySelector('#id_name')
document.querySelector('.class_name')
document.querySelector('input[type="password"]')
document.querySelector('p:first-child')

//selecting first element of unordered list
document.querySelector('ul')
const myul=document.querySelector('ul')
myul.querySelector('li')
const tg=myul.querySelector('li')
tg.style.backgroundColor='green'
tg.style.padding='15px'

//node list and html collection list are not arrays purely

const tempList=document.querySelectorAll('li')
tempList[0].style.color='green'
//we have to specify the element in node list of whose manipulation is to be done even if there is only one element present
tempList.forEach( (item)=>{
    item.style.colo='green'
})
//we have to use shift enter on console

//we cannot use for each loop in hml collection

const tempClassList=document.getElementsByClassName('class_name')
//here we will recieve a html collection and inorder to iterate over this collection we have to convert it to array
const MyConvertedArray=Array.from(tempClassList)
MyConvertedArray.forEach((item)=>{
    item.style.color='orange'
})

