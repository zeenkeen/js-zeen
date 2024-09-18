//Array or list

const myArray = [1,3,3,45,5,7,8,8,5,5,75,]

console.log(myArray[4])
// arrays creates a shallow copy-- A Shallow copy of an object is a copy whose properties share the same references-point to the samwe underliying values as those the source object from which the copy was made.

const myHeroes = ["shaktiman", "nagaraj", "krissh"]

const myList = new Array("zeen", "sheen", "keen")
console.log(myList[1])

//Array Methods
myArray.push(1000) //adds this at the end of the array/list
console.log(myArray) 

console.log(myArray.pop())