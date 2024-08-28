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

    // تحديد عناصر القائمة الجانبية وتطبيق toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            menuToggle.classList.toggle('active');
        });
    } else {
        console.error('Elements .menu-toggle or .nav-menu not found.');
    }
});

// تحسين تحميل الصور

    const lazyImages = document.querySelectorAll('img.lazyload');
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    // التأكد من وجود العناصر قبل إضافة الأحداث
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    } else {
        console.error('Elements .menu-toggle or .nav-menu not found.');
    }
    
    
});

