document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations
    const reveals = document.querySelectorAll('.reveal');
    const reveal = () => {
        reveals.forEach(r => {
            if (r.getBoundingClientRect().top < window.innerHeight * 0.85) {
                r.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', reveal);
    reveal();

    // Hero Carousel
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        slides[0].classList.add('active');
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }
});