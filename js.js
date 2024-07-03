// script.js
document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.image-container img');
    
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.2)';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});
