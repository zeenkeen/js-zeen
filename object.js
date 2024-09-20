// Object literals
const mysym = Symbol("key1")
const JsUser = {
    name: "zeen",
    "full name": "zeeshan alam",
    age: 28,
    [mysym]: "mykey1", //this is the syntax to use the symbol inside an object
    location: "Jaipur",
    email: "zeen@gmail.com",
    isLoggedIn: false,
    lastLogingDays: ["Monday", "saturday"]
}

//Accessing object- two methods--dot notation and bracket notation

console.log(JsUser.email)
console.log(JsUser["email"])

//some key can only be acessed via bracket notation
// console.log(JsUser.full name) // can access via dot notation
console.log(JsUser["full name"])

console.log(JsUser[mysym])


console.log(typeof mysym)

//to change data in object
JsUser.email = "zeenalam5@gmail.com"
console.log(JsUser.email)

// use freeze to lock value

// add fucntion in objec

JsUser.greeting = function(){
    console.log("hello this is zeen, how you doin")

}
console.log(JsUser.greeting)
console.log(JsUser.greeting())

JsUser.greetingagain = function(){
    console.log(`hello this is zeen, how you doin ${this["full name"]}`)

}
console.log(JsUser.greetingagain())