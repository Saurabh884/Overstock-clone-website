var cartItem=JSON.parse(localStorage.getItem("carts"))||[];

var total = cartItem.reduce(function (sum, elem, index, arr) {
return sum + Number(elem.price);
}, 0);

var length = cartItem.length;
console.log(length);

console.log(total);

var qty = document.querySelector(".qty");
qty.innerText = ` ${(length)} Items`

var money = document.querySelector(".value_money");
money.innerText = `INR ${total}`

var totalmoney = document.querySelector(".total_money");
// totalmoney.innerText = "INR"+" "+ Number(total- 2096 + 11881)
   totalmoney.innerText = `INR ${total+11881-2096}`

   document.querySelector(".cart_btn").innerHTML = `${length}`
   document.querySelector(".cart_btn").style.color = "green"


cartItem.map(function(elem,index){
    var box = document.createElement("div");

    var photo = document.createElement("img");
    photo.src = elem.image_url;

    var price = document.createElement("p");
    price.innerText = elem.price;

    var ratings = document.createElement("p");
    ratings.innerText = elem.ratings;

    var name = document.createElement("h4");
    name.innerText = elem.type;


    var remove_btn = document.createElement("button");
    remove_btn.innerText = "Remove";
    remove_btn.setAttribute("class","removebutton")
    remove_btn.addEventListener("click", function () {
     removeItem(elem,index);
     });
    
   
    box.append(photo,price,ratings,name,remove_btn);
    document.querySelector(".productItems").append(box);
    console.log(cartItem);

    function removeItem(elem,index) {
    console.log(elem, index);
    cartItem.splice(index,1);
    console.log(cartItem);
    localStorage.setItem("carts", JSON.stringify(cartItem));
    window.location.reload();
}


});


var bagbtn =document.querySelector(".bag");
bagbtn.addEventListener("click", goTobag)

function goTobag(){
    window.location.href = "checkout.html" ;
}

var accbtn =document.querySelector(".account");
accbtn.addEventListener("click", goTosignup)

function goTosignup(){
    window.location.href = "signin.html" ;
}

document.querySelector(".final_checkout").addEventListener("click",package);

function package(){
    window.location.href = "checkout.html"
}

var listbtn =document.querySelector(".list");
listbtn.addEventListener("click", goToProductpage)

function goToProductpage(){
    window.location.href = "product.html" ;
}
var logo=document.querySelector(".logo");
logo.addEventListener("click",function(){
    window.location.href="index.html";
})