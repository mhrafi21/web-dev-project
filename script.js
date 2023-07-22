
const body = document.getElementById("body");
const toggle = document.getElementById("toggle-btn");
const navbar = document.getElementById("nav-bar")
toggle.addEventListener("click", ()=>{
    navbar.classList.toggle("active");
})