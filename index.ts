const newtoggleButton = document.getElementById("toggle-skills") as HTMLButtonElement
const newskills = document.getElementById("skills") as HTMLElement


newtoggleButton.addEventListener("click", ()=>{
    if(newskills.style.display === "none"){
        newskills.style.display = "block"
    } else {
        newskills.style.display = "none"
    }
});