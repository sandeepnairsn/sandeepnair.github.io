// Smooth scrolling when menu items are clicked
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle menu dots on hover
const menuDots = document.getElementById('menu');
menuDots.addEventListener('mouseenter', () => {
    menuDots.style.transform = 'scale(1.1)';
});

menuDots.addEventListener('mouseleave', () => {
    menuDots.style.transform = 'scale(1)';
});  
