const btn = document.querySelector('.wrapper__sliders__btn');
const wrapper = document.querySelector('.wrapper__sliders');
const containerSlider = Array.from(
    document.querySelectorAll('.container__slide')
);

let width = window.innerWidth;

window.addEventListener('resize', () => {
    width = window.innerWidth;
    if (width >= 768) {
        checkChildren();
    }
});

btn.addEventListener('click', function () {
    if (btn.className.includes('btn-show')) {
        changeHeightOpen();
    } else {
        changeHeightClose();
    }
});

function checkChildren() {
    if (width > 768 && width < 1120) {
        for (let i = 0; i < containerSlider.length; i++) {
            if (i >= 6) {
                containerSlider[i].classList.add('hidden');
            }
        }
    }

    if (width >= 1120) {
        for (let i = 0; i < containerSlider.length; i++) {
            if (i <= 7) {
                containerSlider[i].classList.remove('hidden');
            } else {
                containerSlider[i].classList.add('hidden');
            }
        }
    }
}

const changeHeightOpen = () => {
    if (width >= 768 && width < 1120) {
        wrapper.classList.add('wrapper-show-more');

        for (let i = 0; i < containerSlider.length; i++) {
            if (containerSlider[i].className.includes('hidden')) {
                containerSlider[i].classList.remove('hidden');
            }
        }
    } else {
        wrapper.classList.add('wrapper-show-more-small');
        for (let i = 0; i < containerSlider.length; i++) {
            if (containerSlider[i].className.includes('hidden')) {
                containerSlider[i].classList.remove('hidden');
            }
        }
    }

    btn.classList.remove('btn-show');
    btn.classList.add('btn-hide');
};

const changeHeightClose = () => {
    if (width >= 768 && width < 1120) {
        wrapper.classList.remove('wrapper-show-more');

        for (let i = 0; i < containerSlider.length; i++) {
            if (i >= 6) {
                containerSlider[i].classList.add('hidden');
            }
        }
    } else if (width >= 1120) {
        wrapper.classList.remove('wrapper-show-more-small');
        for (let i = 0; i < containerSlider.length; i++) {
            if (i >= 8) {
                console.log(containerSlider[i]);
                containerSlider[i].classList.add('hidden');
            }
        }
    }
    btn.classList.add('btn-show');
    btn.classList.remove('btn-hide');
};

checkChildren();
