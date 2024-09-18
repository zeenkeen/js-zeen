//Random method of Math in js

console.log(Math.random()) //it always return values b/w 0 and 1

//to get numbers greater than 1
console.log(Math.random()*10)
/* but what if the it returns something like 0.001, then 
multiplying with 10 won't work so we can add 1 after it */
console.log((Math.random()*10) +1)

//MOST IMPORTANT CONCEPT (MIC)

const min = 10
const max = 15
//see explanation in chatgpt, chatname-- MIC-random.js explanation
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
