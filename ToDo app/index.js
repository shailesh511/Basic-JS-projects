window.addEventListener(
    "load",()=>{
        let form = document.querySelector("#new-task-form");
        let input = document.querySelector("#new-task-input");
        let tasks = document.querySelector("#tasks");

        form.addEventListener('submit',(e)=>{
           e.preventDefault();
           
           let todo = input.value;

           //if user doesn't add any task
           if(!todo){
            alert("Please enter the todo ....")
           return;   
             }

        //creating a div element
           let task_ele =  document.createElement("div")
           task_ele.classList.add("task_ele");

        //one more div for content and assigning input value to it.
           let content = document.createElement("div");
           content.classList.add("content");
    
        //appending content div as a child to task_ele
        task_ele.appendChild(content);
        
        //creating a  tag to show our todo items
        let inputEle = document.createElement("input");
        inputEle.classList.add("input");
        inputEle.type = "text"
        inputEle.value = todo;
        inputEle.setAttribute("readonly","readonly")
        
        //creating buttons
        let editEle =  document.createElement("button");
        editEle.classList.add("edit");
        editEle.innerText = "Edit";
        
        // edit.addEventListener("click",()=>{})

        let deleteEle =  document.createElement("button");
        deleteEle.innerText = "Delete";

        task_ele.appendChild(inputEle);
        task_ele.appendChild(editEle);
        task_ele.appendChild(deleteEle);

        //appending this task_ele to the super parent component in out html tag
        tasks.appendChild(task_ele);
        
      //adding onclick to edit and delete
        
         editEle.addEventListener("click",()=>{
           
            //checking the button and changing functionality
            if(editEle.innerText === "Edit"){
            inputEle.removeAttribute("readonly","readonly");
            inputEle.focus();
            editEle.innerText = "Save"
            }
            else if(editEle.innerText  === "Save")
                        //checking the button and changing functionality
            {
                   inputEle.addAttribute("readonly","readonly");
                   editEle.innerText = "Edit"
            }
        } )

         deleteEle.addEventListener("click",()=>{
             tasks.removeChild(task_ele);
         })


    
       })//form addEventListener closes
    })
