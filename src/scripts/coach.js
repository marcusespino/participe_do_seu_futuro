const coachSection = document.querySelector('.coach');

const coachObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('active');
        } else {
        entry.target.classList.remove('active');
        }
    });
    }, {
    threshold: 0.4
    });

    coachObserver.observe(coachSection);