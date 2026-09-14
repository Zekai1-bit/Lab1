function revealOnScroll() {
    const triggerPoint = window.innerHeight * 0.85;

    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        if (el.getBoundingClientRect().top < triggerPoint) {
            el.classList.add('is-visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // catches content already on screen at load
