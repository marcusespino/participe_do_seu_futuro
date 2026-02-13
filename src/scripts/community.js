const images = document.querySelectorAll('.falling-images img');
const section = document.querySelector('.community');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        images.forEach(img => {
            img.style.animationPlayState = 'running';
        });
        } else {
        images.forEach(img => {
            img.style.animation = 'none';
            img.offsetHeight; // força reflow
            img.style.animation = '';
            img.style.animationPlayState = 'paused';
        });
        }
    });
    }, { threshold: 0.4 });

    observer.observe(section);
