// new Swiper('.swiper-container', {
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     slidesPerView: 'auto',
//     spaceBetween: 16,
//     loop: true,
//     watchOverflow: true,
//     breakpoints: { 320: { enabled: true }, 768: { enabled: false } },
// });

const slider = document.querySelector('.swiper-container');
const pagination = document.querySelector('.swiper-pagination');
let { clientWidth } = document.body;

let yourSlider;

const sliderInit = () => {
    yourSlider = new Swiper(slider, {
        pagination: {
            el: pagination,
            clickable: true,
        },
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
    })
}

const resizeHandlerSlider = (number) => {
    if (number >= 768) {
        if (yourSlider) {
            yourSlider.destroy();
            return
        }
    }
    sliderInit();
}

window.addEventListener('resize', () => {

    width = window.innerWidth;
    resizeHandlerSlider(width);

});

resizeHandlerSlider(clientWidth)
