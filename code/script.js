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

    // دالة لتبديل القائمة الجانبية
    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    }

    // ربط الزر بتبديل القائمة الجانبية
    document.getElementById('navMobile').addEventListener('click', toggleSidebar);

    // إغلاق القائمة الجانبية عند النقر في أي مكان آخر
    document.addEventListener('click', function(event) {
        const sidebar = document.querySelector('.sidebar');
        const navMobile = document.getElementById('navMobile');
        if (!sidebar.contains(event.target) && !navMobile.contains(event.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
    
});
