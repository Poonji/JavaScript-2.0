// filter .........
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=>num>5)
console.log(newNums);

//reduce 
// it reduces the array to a single value
const arr=[1,2,3,4,5,6,6]
let newarr=arr.reduce((n1,n2)=>{
    return n1+n2
})
console.log(newarr)


