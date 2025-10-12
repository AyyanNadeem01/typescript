let score:number|string=33
score=44
score="55"

type User={
    name:string
    id:number
}
type Admin={
    username:string
    id:number
}

let ayyan:User|Admin={name:"ayyan",id:21}

ayyan={username:"an",id:34}

function getDbId(id:number|string){
    //making some API calls
    console.log(`DB id is ${id}`);
}
getDbId(3)
getDbId("3")

function getDbId2(id:number|string){
    if(typeof id==="string"){
        id.toLowerCase()
    }
}

const data:number[]=[1,2,3]
const data2:(number|string|boolean)[]=[1,2,3,"4",true]

let pi:3.14=3.14

let seatAllotment:"aissle"|"middle"|"window"

seatAllotment="aissle"