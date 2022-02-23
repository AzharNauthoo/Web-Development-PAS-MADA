const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
//Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })

   

}

const preloader = () => {
    const loader = document.getElementById("pre-loader")

    window.addEventListener("load", function(){
        loader.style.display = "none";
    })
}

preloader();
navSlide();



