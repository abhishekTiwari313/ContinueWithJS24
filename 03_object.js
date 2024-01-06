//singleton

///object literals
//object.create

const mySym = Symbol("key1")

let user = {
   name: "Hitesh",
   "fullname" : "Abhishek Tiwari",
   [mySym] : "mykey1" ,
   age : 18,
   email: "abhishek.at313@gmail.com",
   location : "lucknow",
   isLoggedIn : false ,
   lastLoginDays : ["monday","Saturday"]
}

// console .log(user.email);
// console.log(user["name"])
// console.log( user["fullname"])
// console.log(user[mySym])

user.email = "naman@123gmail.conm"
//Object.freeze(user)

//console.log(user)

user.greeting = function(){
    //console.log("hitesh chausdhuhu");
    console.log(`hello jsaUxer ${this.age}`)
}
console.log(user.greeting())
console.log(user.greeting)