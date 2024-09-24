document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // تحريك الروابط
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop - 50, // لضبط التمرير بحيث لا يغطي الهيدر القسم
                behavior: 'smooth'
            });
        });
    });

    // تأثير التحميل التدريجي للعناصر
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        window.addEventListener('scroll', () => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 50) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
                section.style.transition = 'all 0.6s ease-out';
            }
        });
    });
});
