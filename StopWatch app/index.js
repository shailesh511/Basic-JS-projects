let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");


let seconds=0;
let minutes=0;
let hours=0;

let displaySeconds="";
let displayMinutes="";
let displayHours="";

let watch= "stopped"

start.addEventListener("click",()=>{

    watch ="start"

    seconds++;
   
    //if one minutes passed then set seconds to 0 and increment minute to 1
    if(seconds/60===1)
    {
        seconds =0;
        minutes++;
        //if one hour passed then set minutes to 0 and increment hour to 1
        if(minutes/60===1)
        {
            minutes=0;
            hours++;
        }
    }
    
    //if seconds variable is less then 0 then
    if(seconds<10)
    {
         displaySeconds = '0'+ seconds.toString();
    }
    else if(seconds>=10)
    {
        displaySeconds =  seconds.toString();
    }

    //if minutes variable is less then 0 then
    if(minutes<10)
    {
        displayMinutes = '0'+ minutes.toString();
    }
    else if(minutes>=10)
    {
        displayMinutes =  minutes.toString();
    }

    //if minutes variable is less then 0 then
    if(hours<10)
    {
            displayHours = '0'+ hours.toString();
    }
    else if(hours>=10)
    {
        displayHours =  hours.toString();
    }

   document.querySelector("#display").innerHTML = hours + ":" +minutes +":"+ seconds;

})

reset.addEventListener("click",()=>{

        seconds=0;
        minutes=0;
        hours=0;
    document.querySelector("#display").innerHTML = "00:00:00";
})


