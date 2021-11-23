"use strict"


let displayprice = document.getElementById("displayprice");
let price1 = 5;
let price2 = 10;
let price3 = 15;

let DOMnumber1 = document.querySelector("#number1");
let DOMnumber2 = document.querySelector("#number2");
let DOMnumber3 = document.querySelector("#number3");


function add(num)
{
    if (num == 1)
    {
        let num1 = +DOMnumber1.innerHTML;
        num1 = num1 + 1;
        DOMnumber1.innerHTML = num1;
    }
    if (num == 2)
    {
        let num2 = +DOMnumber2.innerHTML;
        num2 = num2 + 1;
        DOMnumber2.innerHTML = num2;
    }
    if (num == 3)
    {
        let num3 = +DOMnumber3.innerHTML;
        num3 = num3 + 1;
        DOMnumber3.innerHTML = num3;
    }
}


function minus(num)
{
    if (num == 1)
    {
        let num1 = +DOMnumber1.innerHTML;
        if(num1 > 0)
        {
            num1 = num1 - 1;
            DOMnumber1.innerHTML = num1;
        }  
    }
    if (num == 2)
    {
        let num2 = +DOMnumber2.innerHTML;
        if(num2 > 0)
        {
            num2 = num2 - 1;
            DOMnumber2.innerHTML = num2;
        }  
    }
    if (num == 3)
    {
        let num3 = +DOMnumber3.innerHTML;
        if(num3 > 0)
        {
            num3 = num3 - 1;
            DOMnumber3.innerHTML = num3;
        }  
    }
}


function count()
{
    let num1 = +DOMnumber1.innerHTML;
    let num2 = +DOMnumber2.innerHTML;
    let num3 = +DOMnumber3.innerHTML;

    let result = price1 * num1 + price2 * num2 + price3 * num3;
    displayprice.innerHTML = result;
}
