document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                document.body.style.backgroundColor = section.getAttribute('data-bg-color');
            }
        });
    });
});
