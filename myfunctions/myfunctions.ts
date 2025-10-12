function addTwo(num):number{
    return num+2;
    //return "hello";
}
// function addTwo(num:number){
//     num.toUpperCase();
//     return num+2;
// }
//console.log(addTwo(2));working 
console.log(addTwo("5"));

function signUpUser(name:string,email:string,isPaid:boolean){
}
signUpUser("ayyan","ayyan137a@gmail.com",true);
// let loginUser=(name:string,email:string,isPaid:boolean=false)=>{
// if(isPaid===void 0){isPaid=false;}
// }
let loginUser=(name:string,email:string,isPaid:boolean=false)=>{

}
loginUser("ayyan","ayyan137a@gmail.com")

function getValue(myVal:number){
    if(myVal>5){
        return true;
    }
    return "200 OK"
}

const getHello=(s:string):string=>{
    return "hello";
}

const heros=["thor","spiderman","ironman"]
//const heros=[1,2,3]

heros.map((heros:string)=>{
    return `hero is ${heros}`
})

heros.map((heros:string):string=>{
    return `hero is ${heros}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg);
    //return 1   error
}
function consoleErrorthrow(errmsg:string):never{
    throw new Error(errmsg);
    //return 1   error
}
export{}
