// تحميل القائمة الجانبية وتفعيلها
document.addEventListener('DOMContentLoaded', function() {
    const navMobile = document.getElementById('navMobile');
    const sidebar = document.querySelector('.sidebar');

    navMobile.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});
