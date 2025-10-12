const score : Array<number>=[]
const name : Array<string>=[]

function identityOne(val:boolean|number):boolean|number{
    return val
}
function identityTwo(val:any):any{
    return val
}
function identityThree<Type>(val:Type):Type{
    return val
}
//identityThree(true)
function identityFour<T>(val:T):T{
    return val
}
interface Bottle{
    brand:string,
    type:number
}
identityFour<Bottle>({brand:"coke",type:3})

function getSearchProducts<T>(products:T[]):T{
    //do some database operations
    const myIndex=3
    return products[myIndex]
}

const getMoreSearchProducts=<T,>(products:T[]):T=>{
    //do some db operations
    const myIndex=4
    return products[myIndex]
}

interface Database{
    connection:string,
    username:string,
    password:string
}

function anotherFunction<T,U extends number>(valOne:T,valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}
//anotherFunction(3,"4")//error
anotherFunction(3,4)

interface Quiz{
    name:string,
    author:string,
    subject:string
}
class Sellable<T>{
    public cart:T[]=[]
    addToCart(product:T){
        this.cart.push(product)
    }
}