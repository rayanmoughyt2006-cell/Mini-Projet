const btn = document.querySelector(".Homemenu")
const menu = document.getElementById("ul")
console.log(btn)
console.log(menu)
btn.addEventListener("click", ()=>{
    menu.classList.toggle("active")
})