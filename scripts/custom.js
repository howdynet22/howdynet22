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

  // Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
      
    // Wait for all images, stylesheets, and scripts to be loaded
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loading-screen');
        loader.classList.add('hidden');
    });
});
