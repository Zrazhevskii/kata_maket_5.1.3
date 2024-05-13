let container = document.querySelector('.container');
let containerChild = container.children;
// let temp = document.querySelector('#template').content;
// let item = temp.querySelector('.swiper-slide');
let btn = document.querySelector('.wrapper__slider__btn');
let wrapper = document.querySelector('.wrapper__slider');
let width = window.innerWidth;



window.addEventListener('resize', () => {

    width = window.innerWidth;

    chekenChildren()
   
    // if (width > 768 && width < 1120) {
    //     containerChild[6].classList.add('hidden');
    //     containerChild[7].classList.add('hidden');
    // }

    // if (width >= 1120) {
    //     containerChild[6].classList.remove('hidden');
    //     containerChild[7].classList.remove('hidden');
    // }
    
});

btn.addEventListener('click', function () {
    if (btn.textContent === 'Показать всё') {
        wrapper.style.height = '450px';
        btn.textContent = 'Скрыть';
        btn.className = 'wrapper__slider__btn btn-hide';
        for (let i = 0; i < containerChild.length; i++) {
            if (containerChild[i].className.includes('hidden')) {
                containerChild[i].className = 'container__slide slide';
            }
        }
    } else {
        wrapper.style.height = '300px';
        btn.textContent = 'Показать всё';
        btn.className = 'wrapper__slider__btn btn-show';
        for (let i = 0; i < containerChild.length; i++) {
            if (i >= 6 && width < 1120) {
                containerChild[i].className = 'container__slide slide hidden';
            }

            if (width > 1120 && i >= 8) {
                containerChild[i].className = 'container__slide slide hidden';
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
};

chekenChildren();
