//const tinderUser = new Object();

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name  = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "somwe124343@123gmail.com",
    fullname : {
    userFullname : {
        firstname : "Abhishek ",
        lastname : "Tiwari"
    }
    }
}
//console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {
    1: "a",2 :"b"
}

const obj2 = {
    3: "c",
    4: "d"
}

//const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3)

const user = [
    {
        id : 1,
        email:"hites@gamil.com"
    }
]
//user[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))


const course = {
    coursename : "js in hindi",
    price: "888",
    courseInstructor : "hitesh"
}

//course.courseInstructor
const {courseInstructor : Instructor}= course
//console.log(courseInstructor)
console.log(Instructor);

// const navbar = ({company}) =>{

// }
// navbar(company = " hitesh")

// {
//    "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }