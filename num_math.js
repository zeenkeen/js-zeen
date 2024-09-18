//numbers and math

const score = 400

const balance = new Number(500)
console.log(balance)

//convert balance into string and see length of string
console.log(balance.toString().length)

const new_balance = balance.toFixed(2)
console.log(new_balance)
console.log(typeof new_balance)

const otherNumber = 123.892345
console.log(otherNumber.toPrecision(3)) //toPrecision return a string --REMMEBER
console.log(otherNumber.toPrecision(2))
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
let localString = hundreds.toLocaleString() //converts the num. to USA reading style
console.log(localString)

const localString2 = hundreds.toLocaleString('en-IN') //converts the num to INDIAN reading style
console.log(localString2)
console.log(typeof localString2)