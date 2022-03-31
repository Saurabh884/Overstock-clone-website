var cartItem=JSON.parse(localStorage.getItem("carts"))||[];
var length = cartItem.length;
console.log(length);
document.querySelector(".carting").innerHTML = `${length}`
document.querySelector(".carting").style.color = "green";



var productObj = [{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/6b6ea38e2603ffb054993aaaa44e0fe3f7493a05/Futzca-Convertible-Sectional-Sofa-Couch-with-Reversible-Chaise%2C-Modern-Linen-Fabric-L-Shaped-Couch-for-Small-Space.jpg?imwidth=480&impolicy=medium",
price: 42040,
ratings: "***",
type: "Futzca Linen Upholstered L-shaped Sectional Sofa w/ Reversible Chaise",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/bfa39d46f98d6f8774094d8c64b8edc8d84b22fa/Ashlyn-Woven-Fabric-Sleeper-Sectional-Sofa.jpg?imwidth=480&impolicy=medium",
price: 71527,
ratings: "****",
type: "Ashlyn Woven Fabric Sleeper Sectional Sofa",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/09b786c3dcc47edf8b7843843e3d9dc54d335e6f/Copper-Grove-Perreux-Linen-Reversible-Sleeper-Sectional-Sofa.jpg?imwidth=480&impolicy=medium",
price: 68200,
ratings: "****",
type: "Copper Grove Perreux Linen Reversible Sleeper Sectional Sofa",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/1c9b4566f956b504db807b0bfec72a5922a68d86/3-Piece-Modern-Soft-Reversible-Sectional-Sofa-with-Ottoman-%282-Options%29.jpg?imwidth=480&impolicy=medium",
price: 103584,
ratings: "***",
type: "3 Piece Modern Soft Reversible Sectional Sofa with Ottoman (2 Options)",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/094438a4795e6f2d273c9b756ae77a45b09f8d17/Ashlyn-Reversible-Sleeper-Sofa-with-Storage-Chaise.jpg?imwidth=480&impolicy=medium",
price: 70553,
ratings: "****",
type: "Ashlyn Reversible Sleeper Sofa with Storage Chaise",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/a61ce4124d35e07bf2bf769e29587fa61994a637/Casanova-7-piece-Dark-Gray-Linen-Modular-Sectional-Sofa-and-Ottoman.jpg?imwidth=480&impolicy=medium",
price: 164872,
ratings: "*****",
type: "Casanova Dark Grey Linen 7-piece Modular Sectional Sofa and Ottoman",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/ec1543c1a4f69ee719a81ebcf6032f6434911a52/Classic-and-Cozy-L-Shape-Sectional-Sofa%2CPull-Out-Sleeper.jpg?imwidth=480&impolicy=medium",
price: 144523,
ratings: "**",
type: "Classic and Cozy L Shape Sectional Sofa,Pull-Out Sleeper",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/2502913c16b772cf32b0cda2a5fd9514ab7fc8ef/Mabel-Linen-Fabric-Sleeper-Sectional-with-cupholder%2C-USB-charging-port-and-pocket.jpg?imwidth=480&impolicy=medium",
price: 72580,
ratings: "*",
type: "Mabel Linen Fabric Sleeper Sectional with cupholder, USB charging port and pocket",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/1eb453e7c8d005d9d35801fd81ef75520de770cf/Emmie-Mid-century-Modern-5-piece-Sectional-Sofa-Set-by-Christopher-Knight-Home.jpg?imwidth=480&impolicy=medium",
price: 118250,
ratings: "*****",
type: "Emmie Mid-century Modern 5-piece Sectional Sofa Set by Christopher Knight Home",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/ccbe91249a8a063696ff11155791d7ba2879419e/138%22-Modular-Velvet-Sofa-Orange-Sectional-Upholstery-Modern-Couch-Floor-Sofa-in-Large.jpg?imwidth=480&impolicy=medium",
price: 186228,
ratings: "**",
type: "138 Modular Velvet Sofa Orange Sectional Upholstery Modern Couch Floor Sofa in Large",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/51fbfb541c25a773d3d9871e9f3e1626bf62ad68/Lucca-Woven-Fabric-Reversible-Sectional-Sofa-Sleeper-with-Storage-Chaise.jpg?imwidth=480&impolicy=medium",
price: 72000,
ratings: "*",
type: "Copper Grove Arogundade Woven Fabric Reversible Sectional Sleeper Sofa",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/089543c8f6ef65144e6601c5dcf3ac84d817d049/Modern-Large-Upholstered-U-Shape-Sectional-Sofa.jpg?imwidth=480&impolicy=medium",
price: 699,
ratings: "**",
type: "Modern Large Upholstered U-Shape Sectional Sofa",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/34cedd1e1cd0d3fdb0cc78f2b7363116d21f75fb/Convertible-Modular-Sectional-Sofa-with-Ottomans.jpg?imwidth=480&impolicy=medium",
price: 42000,
ratings: "***",
type: "Convertible Modular Sectional Sofa with Ottomans",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/4c00840e7b2122767960e27620bdfec9cd230185/Ledgemere-Modern-Fabric-Upholstered-4-Seater-Sectional-Sofa-with-Chaise-Lounge-by-Christopher-Knight-Home.jpg?imwidth=480&impolicy=medium",
price: 110000,
ratings: "*",
type: "Ledgemere Modern 3-pc. Sectional Sofa w/ Chaise Lounge by Christopher Knight Home",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/b77d0593e58ca65b7df3c055ee03abb8ccb03f9f/Convertible-Sectional-Sofa-Couch-with-Ottoman-Reversible-L-Shaped-Sofa-Couch-Set-in-Fabric.jpg?imwidth=480&impolicy=medium",
price: 80000,
ratings: "***",
type: "Convertible Modular Comforty Sofa with Ottomans",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/7c9fc92d5149411652450db7d600e9b46fc2d12b/Mabel-Dark-Gray-Woven-Fabric-Sleeper-Sectional-with-cupholder%2C-USB-charging-port-and-pocket.jpg?imwidth=480&impolicy=medium",
price: 60000,
ratings: "*****",
type: "Mabel Dark Gray Woven Fabric Sleeper Sectional with cupholder, USB charging port and pocket",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/b221d9fccfc616d371d861186be687b1c5988059/Linen-Sectional-Sofa%2C-U-Shape-Gray.jpg?imwidth=480&impolicy=medium",
price: 120000,
ratings: "****",
type: "Linen Sectional Sofa, U-Shape-Gray",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/10404932/Moser-Bay-Furniture-Roll-Arm-9-seat-Sectional-Sofa-Set-ad2a30aa-1fa9-49f0-95c1-ee37bdf9162f_600.jpg?imwidth=480&impolicy=medium",
price: 250000,
ratings: "**",
type: "Moser Bay Furniture Roll Arm 9-seat Sectional Sofa Set",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/2602f203c444b656114bbb1aed829ab549cf6d0d/Coventry-87W-L-Shaped-Sectional-Couch-by-Bush-Furniture.jpg?imwidth=480&impolicy=medium",
price: 111000,
ratings: "*****",
type: "Coventry 87W L Shaped Sectional Couch by Bush Furniture",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/3409cfca4c77154de2bd3bfcb651d09c61fb82c4/Modern-Upholstered-4-Seat-Sofa-Couch-with-Scrolled-Arm-and-Nail-head-Trim%2C-Sectional-Sofa-with-Storage-Ottoman.jpg?imwidth=480&impolicy=medium",
price: 90000,
ratings: "*",
type: "Modern Upholstered 4-Seat Sofa Couch with Scrolled Arm and Nail head Trim",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/34471edc99556a646a44455410600917e42c2435/Simona-Gray-Velvet-6Pc-Modular-Reversible-Sectional-Sofa-Couch.jpg?imwidth=480&impolicy=medium",
price: 150000,
ratings: "****",
type: "Simona Gray Velvet 6Pc Modular Reversible Sectional Sofa Couch",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/640a622e9e855038fcc796e641a5a5f10e6f3e07/Dark-Grey-Convertible-Sectional-Sofa-Couch-with-Reversible-Chaise%2C-L-Shaped-Couch-with-Modern-Linen-Fabric-for-Small-Space.jpg?imwidth=480&impolicy=medium",
price: 60000,
ratings: "*",
type: "Dark Grey Convertible Sectional Sofa Couch with Reversible Chaise",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/be40795271d91778f8959deef5fb935e48412895/Reversible-Sectional-Couch-with-Ottoman-L-Shaped-Sofa-for-Small-Spaces-Sectional-Sofa-with-Chaise-in-Dark-Grey.jpg?imwidth=480&impolicy=medium",
price: 72000,
ratings: "***",
type: "Reversible Sectional Couch with Ottoman L-Shaped Sofa for Small Spaces",
},
{
image_url:"https://ak1.ostkcdn.com/images/products/is/images/direct/53a28894c8a1dc4391d74eb10b1e5cd8532a6170/Right-Left-Facing-Sectional-Sofa-with-Ottoman%2C-Convertible-Sectional-Sofa-with-Armrest-Storage%2C-Sectional-Sofa-Corner-Couches.jpg?imwidth=480&impolicy=medium",
price: 51000,
ratings: "*****",
type: "Right/Left Facing Sectional Sofa with Ottoman, Convertible Sectional Sofa with Armrest Storage, Sectional Sofa Corner Couches",
},
]


var sorting = document.querySelector("#sorting")
sorting.addEventListener("click",function(){
if(sorting.value=="l2h")
{
productObj.sort(function(a,b){
 return a.price-b.price;
})
showProduct(productObj)
}
else if(sorting.value=="h2l")
{
productObj.sort(function(a,b){
 return b.price-a.price;
})
showProduct(productObj)
}
else{
showProduct(productObj);
}
})
showProduct(productObj)
function showProduct(data){
document.querySelector("#furniture_box").innerHTML=null;
data.map(function(elem){
 var box = document.createElement("div");

 var photo = document.createElement("img");
 photo.src = elem.image_url;

 var price = document.createElement("p");
 price.innerText = elem.price;

 var ratings = document.createElement("p");
 ratings.innerText = elem.ratings;

 var name = document.createElement("h4");
 name.innerText = elem.type;

 var btn = document.createElement("button");
 btn.innerText= "ADD TO CART" ;
 btn.style.backgroundColor = "green";
 btn.style.border = "none";
 btn.style.color = "white";
 btn.style.padding = "10px";
 btn.style.borderRadius = "10px"
 btn.setAttribute("class","addToCartbtn");
 btn.addEventListener("click",function(){
   addToCarts(elem);
   
 })

 
 

 box.append(photo,price,ratings,name,btn);
 document.querySelector("#furniture_box").append(box);
 function addToCarts(elem){
     console.log(elem)            
     cartItem.push(elem);            
     // console.log(cartItem);
     window.location.reload()

  localStorage.setItem("carts", JSON.stringify(cartItem))
}

});
}

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

var logo=document.querySelector(".logo");
logo.addEventListener("click",function(){
    window.location.href="index.html";
})