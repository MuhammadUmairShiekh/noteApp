const main1 = document.querySelector(".main")
const addBtn = document.getElementById("addBtn")

const saveNote = ()=>{
     const noteList = document.querySelectorAll(".box textarea")
      const data = [];
     noteList.forEach(
        (box) =>{
            data.push(box.value)
     }) 
     if( data.length === 0 ){
        localStorage.removeItem("noteList")
     }
     else{
     localStorage.setItem("noteList",JSON.stringify(data))
    }
}
addBtn.addEventListener("click", () => {
    addNote()
})

const addNote = (text = "") => {
    const note = document.createElement("div")
    note.classList.add("box")
    note.innerHTML = `
         <div class="tool"  >
                   
                <i class="fa-solid fa-floppy-disk" style="color: #fbfbfb;"></i>
                <i class="fa-solid fa-trash" style="color: #fbfbfb;"></i>
            </div>
        <textarea>${text}</textarea>    
    `;
    note.querySelector(".fa-trash").addEventListener("click",function (){
        note.remove();
        saveNote()

        
    })
    note.querySelector("textarea").addEventListener("focusout",()=>{
        saveNote()
    })
    
    note.querySelector(".fa-floppy-disk").addEventListener("click",()=>{
        saveNote()
    })
    main1.appendChild(note);
    saveNote()
}

(
    function (){
        const lsnoteList =JSON.parse(localStorage.getItem("noteList"));
        if(lsnoteList === null   ){
            addNote()
            
        }
        else{
            lsnoteList.forEach(
                (lsnoteList) =>{
                    addNote(lsnoteList)
                } 
               )
        }

            
    }
)()