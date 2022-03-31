var cartItem=JSON.parse(localStorage.getItem("carts"))||[];

var total = cartItem.reduce(function (sum, elem, index, arr) {
return sum + Number(elem.price);
}, 0);

var length = cartItem.length;
console.log(length);

console.log(total);
var subtotal = document.querySelector(".subtotal");
subtotal.innerText = ` ${total+11881-2096} INR`;
subtotal.style.color = "teal";
subtotal.style.fontWeight = "bold";

var orderTotal = document.querySelector(".order_total");
orderTotal.innerText = ` ${total+11881-2096+2090+1000+60} INR`;

orderTotal.style.fontSize = "20px";
orderTotal.style.color = "red"

document.querySelector("#payment-form").addEventListener("submit",myPay);

function myPay(){
    event.preventDefault();
    alert("Your payment has been done successfully")
}

document.querySelector(".place_order").addEventListener("click",finalOrder)

function finalOrder(){
    alert("Congrats! your order has been placed succesfully")
}

 document.querySelector(".backTocart").addEventListener("click",backCart);

 function backCart(){
     window.location.href = "cartpage.html"
 }
 var logo=document.querySelector(".logo");
logo.addEventListener("click",function(){
    window.location.href="index.html";
})