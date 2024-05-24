document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.remove('sticky');
            header.classList.add('hidden-header');
        } else {
            header.classList.remove('hidden-header');
            header.classList.add('sticky');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
    });

    // Initialize Swiper for program benefits section
    var programBenefitsSwiper = new Swiper('.swiper-benefits-container', {
        loop: true,
        pagination: {
            el: '.swiper-benefits-pagination',
            clickable: true,
        },
        slideToClickedSlide: true,
    });

    // Initialize Swiper for autoplay section
    var autoPlaySwiper = new Swiper('.swiper-autoplay-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-autoplay-pagination',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    // Initialize Swiper for navigation
    var navigationSwiper = new Swiper('.swiper-navigation-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-navigation-pagination',
            clickable: true,
        },
    });

    // Wait for all images, stylesheets, and scripts to be loaded
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loading-screen');
        loader.classList.add('hidden');
    });
});
