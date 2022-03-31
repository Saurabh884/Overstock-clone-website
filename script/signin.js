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

    document.querySelector("#form").addEventListener("submit",mySign)

     var objData = JSON.parse(localStorage.getItem("signUpData")) || [];
    function mySign(){
        event.preventDefault();

        var userData = {
            email : document.querySelector("#email").value,
            pass: document.querySelector("#password").value,
            confirm_password : document.querySelector("#confirmpass").value,
        };
        console.log(userData);
       
        objData.push(userData);
        console.log(objData)

        localStorage.setItem("signUpData", JSON.stringify(objData))
      
       

    }

document.querySelector("#signupbtn").addEventListener("click",createAccount)

function createAccount(){
    
   
    alert("Account created successfully!");
    window.location.reload();
}

document.querySelector("#form2").addEventListener("submit", loginFun);
var objData = JSON.parse(localStorage.getItem("signUpData")) || [];
  
  function loginFun() {
    event.preventDefault();
    var enteredEmail = document.querySelector("#loginemail").value;
    var enteredPass = document.querySelector("#loginpassword").value;
   
    
    
    for (var i = 0; i < objData.length; i++) {        
      if(objData[i].email==enteredEmail)
      {
        if(objData[i].pass==enteredPass)
        {
            alert("Login Successful");
            window.location.href="product.html";
            break;
        }
          
         
      }
      else{
        alert("Login failed");
      }
      
    }
  }
  var logo=document.querySelector(".logo");
logo.addEventListener("click",function(){
    window.location.href="index.html";
})