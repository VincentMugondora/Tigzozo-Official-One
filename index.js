const menu = document.querySelector(".hamburger")
const overlay = document.querySelector("overlay")
const darkMode = document.querySelector("body")

menu.addEventListener("click", function(event){
    overlay.classList.toggle('animated-menu')
    
})

menu.addEventListener('click', function(){
    menuOne.classList.toggle('animated-menu')
    menu.classList.toggle('active-lines')
})