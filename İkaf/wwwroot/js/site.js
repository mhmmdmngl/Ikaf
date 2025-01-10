// Initialize Swiper
const swiper = new Swiper('.main-slider', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('nav-scrolled');
    } else {
        header.classList.remove('nav-scrolled');
    }
});

// Aktif menü işaretleme
const menuItems = document.querySelectorAll('.menu-item');
const currentLocation = window.location.href;

menuItems.forEach(item => {
    const link = item.querySelector('a');
    if (link.href === currentLocation) {
        item.classList.add('active');
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuContainer = document.querySelector('.menu-container');
    const subMenuItems = document.querySelectorAll('.has-submenu');

    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            menuContainer.classList.toggle('active');
        });
    }

    // Mobile submenu toggle
    subMenuItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            link.addEventListener('click', function (e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    item.classList.toggle('active');
                }
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.main-navigation')) {
            menuContainer.classList.remove('active');
            subMenuItems.forEach(item => item.classList.remove('active'));
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});