"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //return "hello";
}
// function addTwo(num:number){
//     num.toUpperCase();
//     return num+2;
// }
//console.log(addTwo(2));working 
console.log(addTwo("5"));
function signUpUser(name, email, isPaid) {
}
signUpUser("ayyan", "ayyan137a@gmail.com", true);
// let loginUser=(name:string,email:string,isPaid:boolean=false)=>{
// if(isPaid===void 0){isPaid=false;}
// }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("ayyan", "ayyan137a@gmail.com");
