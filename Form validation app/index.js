let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let confirmPass = document.querySelector("#confirmPass");

let btn = document.querySelector("#button");

btn.addEventListener(
    "click",
    ()=>{
         if(userName.value===""||email.value===""||pass.value===""||confirmPass.value==="")
         {
            alert("Please enter username the fields!!!")
         }
         else{
            if(pass.value!==confirmPass.value)
            {
                alert("Pass and confirm pass don't match")
            }
         }
    }
)