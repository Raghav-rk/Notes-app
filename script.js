const notesContainer = document.querySelector(".notes-container");
        const btn = document.querySelector(".btn");
        let notes = document.querySelectorAll(".input-box");

        function showNotes() {
            notesContainer.innerHTML = localStorage.getItem("notes");

        }
        showNotes();

        function store() {
            localStorage.setItem("notes",notesContainer.innerHTML);


        }

        
        
        btn.addEventListener("click", ()=>{
            let inputBox = document.createElement("p");
            let img = document.createElement("img");
            inputBox.className = "input-box";
            inputBox.setAttribute("contenteditable","true");
            img.src = "notes-app-img/images/delete.png";

            notesContainer.appendChild(inputBox).appendChild(img);
        });

       

        notesContainer.addEventListener("click", (e)=>{
  
            if (e.target.tagName == "IMG") {
                e.target.parentElement.remove();
                store();
                
            }

            else if (e.target.tagName == "P") {
                notes = document.querySelectorAll(".input-box");
                notes.forEach(nt=>{
                    nt.onkeyup = function () {
                        store();
                        
                    }
                })
                
            }
        })

        document.addEventListener("keydown",event =>{
            if(event.key === "Enter"){
                document.execCommand("insertLineBreak");
                event.preventDefault();
            }
        })
