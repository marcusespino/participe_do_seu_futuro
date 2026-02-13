const header = document.getElementById('cabecalho');

    window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});