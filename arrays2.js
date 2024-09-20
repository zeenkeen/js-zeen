const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// const marvel_dc = dc_heros.concat(marvel_heros) //Combines two or more arrays. This method returns a new array without modifying any existing arrays


// console.log(marvel_dc)

//Spread operator

const clash_heros = [...dc_heros, ...marvel_heros]

console.log(clash_heros)


const bs_array = [1,2,3,[35,35,64,[56,667],346,[36,5,],464,46,7,5,324]] //it has arrays within arrays and within aray
//lets make bs array into usable array with flat method

const usable_aray = bs_array.flat(Infinity) //instead of infinity we should give real dept of the array we need to flat
console.log(usable_aray)

console.log(Array.from("Zeen")) // converts the string into array

// console.log(Array.from("zeen","Naghma","love","eachother")) //This line is problematic because Array.from() doesn't take multiple strings as arguments.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //converts  into array