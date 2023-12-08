/*function avg(a,b)
{
    return(a+b)/2;
}
c1=avg(4,6);
c2=avg(14,16);
console.log(c1,c2);
return c2;
console.log("poonji") */  // return k baad kuch print ni hota


/*function loginUserMessage(username)
{
    if(!username)
    {
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("poonji")) */

/*function calculatecartprice(...num1) 
//... is rest/spread operator it depends on its use case when to call spread and when to call rest, this operator allows to enter multiple  values
{
    return num1
}
function calculatecartpricen(num2)
{
    return num2

}
console.log(calculatecartprice(200,400,322))
console.log(calculatecartpricen(32,32,434,32,32))*/

  function handleObject(anyobject)
  {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  }

  handleObject({username:"sam",
price: 399
})