window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY >0);
})


const headers = document.querySelector("#head");
const option = document.querySelector('.fas');
option.addEventListener('click', function() {
     headers.classList.toggle("tits");
    console.log('hi');
})


headers.addEventListener('click', function() {
    console.log('Hey');
}) 