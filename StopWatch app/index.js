let start = document.querySelector(".start");
let reset = document.querySelector(".reset");


let seconds=0;
let minutes=0;
let hours=0;
//
let displaySeconds="";
let displayMinutes="";
let displayHours="";

let count= 0;
let variable =null;

start.addEventListener("click",()=>{
    count++;

    if(variable!==null)
    {
        clearInterval(variable);
    }
   variable = window.setInterval(()=>{
            if(count % 2 !== 0)
            {
                start.innerText = "Pause"

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
                    displaySeconds =  seconds;
                }

                //if minutes variable is less then 0 then
                if(minutes<10)
                {
                    displayMinutes = '0'+ minutes.toString();
                }
                else if(minutes>=10)
                {
                    displayMinutes =  minutes;
                }

                //if minutes variable is less then 0 then
                if(hours<10)
                {
                        displayHours = '0'+ hours.toString();
                }
                else if(hours>=10)
                {
                    displayHours =  hours;
                }

                document.querySelector("#display").innerHTML = displayHours + ":" +displayMinutes +":"+ displaySeconds;
            }
         },1000)
   
        if(count%2=== 0)
       {
        start.innerText = "Start"
        watch="pause"
        document.querySelector("#display").innerHTML = displayHours + ":" +displayMinutes +":"+ displaySeconds;
        clearInterval();
       }
 }
)

reset.addEventListener("click",()=>{

        seconds=0;
        minutes=0;
        hours=0;
    document.querySelector("#display").innerHTML = "00:00:00";
    clearInterval(variable);
})


