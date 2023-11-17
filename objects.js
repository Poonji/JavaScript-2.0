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