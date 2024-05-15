const container = document.querySelector('.box__container');
const containerChild = container.children;
const btn = document.querySelector('.wrapper__sliders__btn');
const wrapper = document.querySelector('.wrapper__sliders');
let width = window.innerWidth;

window.addEventListener('resize', () => {
    width = window.innerWidth;
    if (width >= 768) {
        chekenChildren();
    }
});

btn.addEventListener('click', function () {
    if (btn.className.includes('btn-show')) {
        wrapper.classList.add('wrapper-show-more')
        btn.classList.remove('btn-show');
        btn.classList.add('btn-hide');
        for (let i = 0; i < containerChild.length; i++) {
            if (containerChild[i].className.includes('hidden')) {
                containerChild[i].classList.remove('hidden');
            }
        }
    } else {
        wrapper.classList.remove('wrapper-show-more')
        btn.classList.add('btn-show');
        btn.classList.remove('btn-hide');
        for (let i = 0; i < containerChild.length; i++) {
            if (i >= 6 && width < 1120) {
                containerChild[i].classList.add('hidden');
            }

            if (width > 1120 && i >= 8) {
                containerChild[i].classList.add('hidden');
            }
        }
    }
});

function chekenChildren() {
    if (width > 768 && width < 1120) {
        containerChild[6].classList.add('hidden');
        containerChild[7].classList.add('hidden');
    }

    if (width >= 1120) {
        containerChild[6].classList.remove('hidden');
        containerChild[7].classList.remove('hidden');
    }


}

chekenChildren();
