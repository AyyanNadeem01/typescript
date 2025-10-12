interface User{
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string,
    //startTrail:()=>string
    startTrail():string,
    getCoupon(couponname:string,value:number):number
}

interface User{//reopening
    githubToken:string
}

interface Admin extends User{
    role:"admin"|"ta"|"learner"
}

const admin1:Admin={email:"a@a.com",userId:142,githubToken:"githubtoken",
    startTrail:()=>{return "trail is started"},
    getCoupon:(name:"coupon1",val:1)=>{return val},role:"admin"}

const ayyan:User={email:"a@a.com",userId:142,githubToken:"githubtoken",
    startTrail:()=>{return "trail is started"},
    getCoupon:(name:"coupon1",val:1)=>{return val}}
ayyan.email="a@gmail.com"
