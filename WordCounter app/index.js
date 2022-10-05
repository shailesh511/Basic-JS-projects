let val = document.querySelector(".t1");
let result = document.querySelector("#result");
 
val.addEventListener("change",()=>{
   let str= [...val.value];
   result.innerHTML = "Word length is "+ str.length;
})

