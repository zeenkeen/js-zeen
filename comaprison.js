//strict comaprison ===
console.log('2'===2)
console.log("2"==2)

/* primitive and non primitive data types */
// primitve 7 types
//string, number, boolean, null, undefined, symbol,bigint

//nonprimitive or reference type
// arrays, functions, objects

//symbol--unique
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 1234265436876543326765432n //bignumber

const hero = ["zeen", "sheen","keen","leen"]

let myObject = {
    name = "zeen"
    age = 28
}
const myfunction = function(){
    console.log("this is a function")
}