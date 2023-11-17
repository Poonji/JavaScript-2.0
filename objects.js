const JsUser={
    name:"Poonji",
    age:18,
    location:"Prayagraj",
    email:"poonjij21@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.name)
console.log(JsUser["email"])
const {location}=JsUser
console.log(location);

// --------------------Objects nesting.............................

const regularUser=
{
    email:"someone@gmail.com",
    name:"someone",
    fullname:{
        userfullname:{
            firstname:"ambar",
            lastname:"mishra"
        }

    }

}
console.log(regularUser.fullname.userfullname.firstname);

//------------Merging of two obj---------

const ob1={ 1:"aa",2: "bb"}
const ob2={3:"cc",4:"dd"}
const ob3={...ob1,...ob2}
console.log(ob3);
// second method
const ob4=Object.assign({},ob1,ob2)
console.log(ob4);



