let val = document.querySelector("#inp");
let btn = document.querySelector(".button")
let result = document.querySelector("#result")

btn.addEventListener("click",()=>{
   let str1 = [...val.value];
   let str2 = [...str1]
   str2.reverse();
  console.log(str1+" "+str2);
  
   if(str1.every((val,index) => val === str2[index]))
    result.innerHTML = "Hurrah!!! text is palindrome...";

   else
   result.innerHTML = "better luck next time!!!";

   
})