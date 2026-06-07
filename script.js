
// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle){
    menuToggle.addEventListener('click', ()=>{
        navLinks.classList.toggle('active');
    });
}

// Navbar Glow on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
        navbar.style.boxShadow = '0 0 30px rgba(56,189,248,.4)';
    }else{
        navbar.style.boxShadow = '0 0 20px rgba(0,153,255,.15)';
    }
});

// Card Reveal Animation
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

cards.forEach(card=>observer.observe(card));

// Back To Top
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', ()=>{
    topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

topBtn.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});
