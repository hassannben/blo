document.addEventListener('DOMContentLoaded', function() {
    const posts = document.querySelectorAll('.post');

    // إظهار المقالات عند التمرير إلى الأسفل
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    posts.forEach(post => {
        observer.observe(post);
    });
});
