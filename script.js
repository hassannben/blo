document.addEventListener('DOMContentLoaded', function() {
    
    // تحديد المقالات وتطبيق IntersectionObserver
    const posts = document.querySelectorAll('.post');

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

    function openSidenav() {
        document.querySelector('.sidebar').classList.toggle('active');
    }
    
    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    }
    
    function toggleNavMenu() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    }
    
    // Call the functions as needed, e.g., attach them to buttons
    // Example:
    // document.querySelector('.sidebar-toggle-button').addEventListener('click', toggleSidebar);
    // document.querySelector('.nav-menu-toggle-button').addEventListener('click', toggleNavMenu);
});
