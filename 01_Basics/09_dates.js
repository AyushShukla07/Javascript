//Dates

let mydate=new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(typeof(mydate))

// let mycreateddate=new Date(2023,0,23)//months start from 0
let mycreateddate=new Date(2023,0,23,5,4)
console.log(mycreateddate.toLocaleString())

let myDate=new Date("01-14-2024")
console.log(myDate.toLocaleString())//DD/MM/YYYY format
 let myTimeStamp=Date.now()
 console.log(myTimeStamp)
 console.log(myDate.getTime())//to get value from declared date
 console.log(Math.floor(Date.now()/1000))//time in seconds

 let nD=new Date()
 console.log(nD)
 console.log(nD.getMonth()+1)
 console.log(nD.getDay())

 nD.toLocaleString  ('default',{
    weekday:"long",
 })


