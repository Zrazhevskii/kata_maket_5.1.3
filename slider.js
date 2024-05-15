new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
    watchOverflow: true,
    breakpoints: { 320: { enabled: true }, 768: { enabled: false } },
});

const slider = document.querySelector('.swiper-container');
let { clientWidth } = document.body;
// console.log(clientWidth);