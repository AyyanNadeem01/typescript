// class User{
//     public email:string
//     name:string
//     private readonly city:string="lahore"
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }

// const ayyan=new User("a@a.com","ayyan");
class User{
    protected _courseCount=1
    readonly city:string="lahore"
    constructor(public email:string,public name:string,
        public userId:string
    ){
    }

    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }
    set courseCount(courseCount){
        if(courseCount<=1){
            throw new Error("error")
        }this._courseCount=courseCount
    }
    private deleteToken(){
        console.log("delete token")
    }
}

class SubUser extends User{
    isFamily:boolean=true
    changeCourseCount(){
        this.courseCount=4
    }
}

const ayyan=new User("a@a.com","ayyan","12213");
