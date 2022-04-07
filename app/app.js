navIcon = document.getElementById("nav-icon")
navMenu = document.getElementById("nav-menu")

navIcon.onclick = () => {
    if(navMenu.classList.contains('opacity-0')){
        navMenu.classList.remove('opacity-0')
    }else{
        navMenu.classList.add('opacity-0')
    }
}
