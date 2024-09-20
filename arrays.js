//Array or list

const myArray = [1,3,3,45,5,7,8,8,5,5,75,]

// console.log(myArray[4])
// arrays creates a shallow copy-- A Shallow copy of an object is a copy whose properties share the same references-point to the samwe underliying values as those the source object from which the copy was made.

const myHeroes = ["shaktiman", "nagaraj", "krissh"]

const myList = new Array("zeen", "sheen", "keen")
// console.log(myList[1])

//Array Methods
// myArray.push(1000) //adds this at the end of the array/list
// // console.log(myArray) 
// myArray.pop()
// console.log(myArray.pop())
// console.log(myArray)

// myArray.unshift("zeen") //it adds zeen at the starting of array
// myArray.shift() //it removes whatever was at the zeroth index in array. in our case it was zeen
// console.log(myArray)

// console.log(myArray.includes(9))
// console.log(myArray.indexOf('zeen'))
// console.log(myArray.indexOf(8))

// const newlist = myArray.join()
// console.log(newlist)
// console.log(typeof newlist)

//SLICE AND SPICE

console.log("A", myHeroes)
const myn1 = myHeroes.slice(1,2)
console.log(myn1)

console.log("B", myHeroes)
const myn2 = myHeroes.splice(1,2)
console.log(myn2)

//learn more about slice and splice in chatGpt slice and splice chat

