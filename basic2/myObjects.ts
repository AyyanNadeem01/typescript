const User={
    name:"ayyan",
    email:"ayyan137a@gmail.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){

}

createUser({name:"ayyan",isPaid:false})

function createCourse():{}{
    return {name:"reactjs",price:300}
}
function createCourse1():{name:string,price:number}{
    return {name:"reactjs",price:300}
}
//createUser({name:"ayyan",isPaid:false,email:"ayyan137a@gmail.com"})//error
let newUser={name:"ayyan",isPaid:false,email:"ayyan137a@gmail.com"}
createUser(newUser)//no error


type User={
    name:string;
    email:string;
    isActive:boolean;
}
type MyString=string;
function createUsertyepAliases(user:User):User{
   return {name:"",email:"",isActive:true}
}
createUsertyepAliases({name:"",email:"",isActive:true})


type User2={
    readonly _id:string
    name:string
    email:string
    isActive:boolean
    credcardDetails?:number//optional
}

let myUser:User2={
    _id:"12345",
    name:"a",
    email:"a@a.com",
    isActive:false
}
myUser.email="a@gmail.com";
// myUser._id="aaa";//not allowed

type cardNumber={
    cardnumber:string
}

type cardDate={
    cardDate:string
}
type cardDetails=cardNumber & cardDate &{//new type based on combination of last 2
    cvv:number
}


export {}


