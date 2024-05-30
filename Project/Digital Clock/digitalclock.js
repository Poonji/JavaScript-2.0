const clock=document.getElementById('clock')
let spanElement = document.querySelector('#banner');
spanElement.style.fontSize = '5em';
setInterval(function()
{
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);