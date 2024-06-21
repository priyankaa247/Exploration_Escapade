document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu-links a');
    const sections = document.querySelectorAll('section');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const menuLinksContainer = document.querySelector('.menu-links');
    const header = document.querySelector('header');

    
    function scrollToSection(sectionId) {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        const targetSection = document.getElementById(sectionId);
        targetSection.style.display = 'block';
        window.scrollTo({
            top: targetSection.offsetTop - header.offsetHeight,
            behavior: 'smooth'
        });

        
        header.classList.remove('show-mobile-menu');
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSectionId = e.target.getAttribute('href').substring(1);
            scrollToSection(targetSectionId);
        });
    });

    
    hamburgerBtn.addEventListener('click', () => {
        header.classList.add('show-mobile-menu');
    });

    closeMenuBtn.addEventListener('click', () => {
        header.classList.remove('show-mobile-menu');
    });
});
