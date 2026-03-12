interface User  {
    name : string ;
    age : number
}

function sumOfAges(user1 : User , user2 : User){
    return user1.age + user2.age
}

const Sum = sumOfAges({
    name : "Harkirat",
    age : 25
},{
    name :"Tanay" ,
    age : 21
})

console.log(Sum)



//Pick in TypeScript

interface Employee  {
    id : string ;
    name : string ;
    email : string ; 
    age : number ;
    password : string

}

type UpdateProps = Pick <Employee , 'name' | 'age' | 'email'>
function UpdateEmployee(UpdatedProps : UpdateProps){
    console.log(`Name : ${UpdatedProps.name} , Email : ${UpdatedProps.email} , Age : ${UpdatedProps.age}`)
}

UpdateEmployee({
    name: "Harkirat",
    email: "harkirat@example.com",
    age: 25
})

