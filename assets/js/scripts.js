// Back to top
const backTop = document.querySelector(".back-to-top");

window.addEventListener('scroll',() => {
    if(window.pageYOffset > 100){
        backTop.classList.add('active')
    }
    else{
       backTop.classList.remove('active')  
    }
})


// Sticky Header
const mainHeader = document.querySelector('.header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        mainHeader.classList.add('fixed');
    } else {
        mainHeader.classList.remove('fixed');
    }
});

// Mobile Navigation

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
    const navLinks = document.querySelectorAll('.navigation ul li a');

    hamburger.addEventListener('click', function() {
        navigation.classList.toggle('active');
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navigation.classList.remove('active');
        });
    });

});
