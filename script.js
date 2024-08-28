document.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.post');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    posts.forEach(post => {
        observer.observe(post);
    });
});
