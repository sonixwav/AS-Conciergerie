setTimeout(function () {
    document.getElementById("loading").style.transition = "opacity 1s";
    document.getElementById("loading").style.opacity = "0";
    setTimeout(function () {
        document.getElementById("loading").style.display = "none";
    }, 1000);
}, 3000);

//============================================

setTimeout(function () {
    document.getElementById("loading-pages").style.transition = "opacity 1s";
    document.getElementById("loading-pages").style.opacity = "0";
    setTimeout(function () {
        document.getElementById("loading-pages").style.display = "none";
    }, 1000);
}, 2000);

//============================================

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});

//============================================

document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('#services, #about, #cities, #contact');
    const triggerHeight = window.innerHeight / 1.3;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerHeight) {
            section.classList.add('animate__animated', 'animate__fadeInLeft',
                'animate__slow');
        }
    });
});

//============================================

const servicesSection = document.getElementById('services');
const serviceContainer = document.querySelector('.services-container');

const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.attributeName === 'class') {
            if (servicesSection.classList.contains('animate__animated')) {
                serviceContainer.classList.add('animate__animated', 'animate__fadeInRight', 'animate__slow',
                    'animate__delay-1s'
                );
            }
        }
    });
});

observer.observe(servicesSection, {
    attributes: true
});

//============================================

const citiesSection = document.getElementById('cities');
const cityContainer = document.querySelector('.cities-container');

const observerF = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.attributeName === 'class') {
            if (citiesSection.classList.contains('animate__animated')) {
                cityContainer.classList.add('animate__animated', 'animate__zoomInRight', 'animate__slow',
                    'animate__delay-1s'
                );
            }
        }
    });
});

observerF.observe(citiesSection, {
    attributes: true
});

//============================================

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});

//============================================

const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2.5)';
    });

    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

//============================================
