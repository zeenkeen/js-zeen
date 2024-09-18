// DATES

let myDate = new Date()
console.log(myDate.toDateString()) // Wed Sep 18 2024
console.log(myDate.toISOString()) //2024-09-18T07:04:49.558Z
console.log(myDate.toJSON()) // 2024-09-18T07:04:49.558Z

console.log(myDate.toLocaleDateString)

// date is an object

let myCreatedDate = new Date(2023,0, 23, 5,3)
console.log(myCreatedDate.toLocaleString())

let myTime = Date.now()
console.log(myTime)


myDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ""
})