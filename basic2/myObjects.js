"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "ayyan",
    email: "ayyan137a@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "ayyan", isPaid: false });
function createCourse() {
    return { name: "reactjs", price: 300 };
}
function createCourse1() {
    return { name: "reactjs", price: 300 };
}
//createUser({name:"ayyan",isPaid:false,email:"ayyan137a@gmail.com"})//error
var newUser = { name: "ayyan", isPaid: false, email: "ayyan137a@gmail.com" };
createUser(newUser); //no error
function createUsertyepAliases(user) {
    return { name: "", email: "", isActive: true };
}
createUsertyepAliases({ name: "", email: "", isActive: true });
var myUser = {
    _id: "12345",
    name: "a",
    email: "a@a.com",
    isActive: false
};
myUser.email = "a@gmail.com";
