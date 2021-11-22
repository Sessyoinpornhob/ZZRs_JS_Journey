"use strict"


//基础的信息提示
// alert("Hello World !");
// alert("why no chinese ?");


//跨脚本管理用户输入
let task = "clean the room";

let bin1 = document.getElementById("btn1");
btn1.addEventListener("click", function()
{
    alert('click1!');
    alert(`Please ${"task"}`);
}, false) 

let bin2 = document.getElementById("btn2");
btn2.addEventListener("click",function()
{
    alert('click2!');
    alert(`Please ${task}`);
    //此处task是变量。
},false)
