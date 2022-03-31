var accbtn =document.querySelector(".account");
accbtn.addEventListener("click", goTosignup)

function goTosignup(){
    window.location.href = "signin.html" ;
}

var cartsbtn =document.querySelector(".carting");
cartsbtn.addEventListener("click", goTocart)

function goTocart(){
    window.location.href = "cartpage.html" ;
}

var bagbtn =document.querySelector(".bag");
bagbtn.addEventListener("click", goTobag)

function goTobag(){
    window.location.href = "checkout.html" ;
}

var listbtn =document.querySelector(".list");
listbtn.addEventListener("click", goToProductpage)

function goToProductpage(){
    window.location.href = "product.html" ;
}

