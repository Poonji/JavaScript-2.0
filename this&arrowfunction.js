const user={
    username:"hitesh",
    price:999,

    welcomeMessage:function()
    {
        console.log(`${this.username}, welcome to website`);
        // this keyword points towards
        // current variable
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
