const user={
    username:"hitesh",
    price:999,

    welcomeMessage:function()
    {
        console.log(`${this.username}, welcome to website`);
        // this keyword points towards
        // current variable
       // console.log(`${this.price},is the price`);
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
//user.price=38237
//user.welcomeMessage()
//--------------arrow function-------

const chai=()=>{
    let username="poonji"
    console.log(this);
}

chai()

//-------pure use of arrow function-------

const addtwo=(num1,num2)=>{
   return num1+num2
}

console.log(addtwo(5,3))
// if you apply { } then you have to write a return keyword
const addtwo0=(num1,num2)=>num1+num2

console.log(addtwo0(3,4))