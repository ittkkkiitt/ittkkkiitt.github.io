document.addEventListener("DOMContentLoaded", () => {

    const brandsContainer = document.querySelector('.brands__nav--advanced');
    const brandsBtnMore = document.querySelector('.brands__btn-more');
    const brandsBtnText = document.querySelector('.btn-more__caption');
    const brandsBtnIco = document.querySelector('.btn-more__icon');

    const showMoreHandler = () => {

    brandsBtnIco.classList.toggle('btn-more__icon--active');
    brandsContainer.classList.toggle("brands__nav--advanced--open");

    if (brandsContainer.classList.contains("brands__nav--advanced--open")) {
        brandsBtnText.textContent = 'Скрыть'
        for (const child of brandsContainer.children) {
            child.style.display = 'flex';
        }
    } else {
        brandsBtnText.textContent = 'Показать все'
        mediaBrands();
    }
    };
    brandsBtnMore.addEventListener('click', showMoreHandler);
  });
///
let mediaSwiper = '(min-width: 768px)';
let mediaSwiperList = window.matchMedia(mediaSwiper);
let windowWidth = window.innerWidth;

document.addEventListener("DOMContentLoaded", mediaInitSlider);
mediaSwiperList.addEventListener('change', mediaInitSlider);

function mediaInitSlider() {
    let swiper;
    const swiperContainer = document.querySelector('.swiper');
    if (mediaSwiperList.matches) {
        swiperContainer.style.display = 'none';
        if ( swiper != undefined ) {
            swiper.destroy( true, true );
        }
    } else {
        swiperContainer.style.display = 'block';
        if ( swiper == undefined ) {
            initSlider();
        }
    }
}
const initSlider = () => {
    const windowWidth = window.innerWidth;
    swiper = new Swiper('.swiper', {
        slidesPerView: windowWidth/(240+32),
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true
    });
}

////
let mediaQueryTablet = '(min-width: 768px) and (max-width: 1119px)';
let mediaQueryDesktop = '(min-width: 1120px)';
let mediaQueryIsTablet = window.matchMedia(mediaQueryTablet);
let mediaQueryIsDesktop = window.matchMedia(mediaQueryDesktop);
document.addEventListener("DOMContentLoaded", mediaBrands);
mediaQueryIsDesktop.addEventListener('change', mediaBrands);
mediaQueryIsTablet.addEventListener('change', mediaBrands);
function mediaBrands(){
    let visibleSlidesTablet =  3*2 ;
    let visibleSlidesDesktop = 4*2 ;
    console.log(mediaQueryIsDesktop.matches);
    if (mediaQueryIsDesktop.matches) {
        let count = 0;
        for (const child of brandsContainer.children) {
            count++;
            child.style.display = 'flex';
            if (count > visibleSlidesDesktop) {
                child.style.display = 'none';
            }
          }
    }
    if (mediaQueryIsTablet.matches) {
        let count = 0;
        for (const child of brandsContainer.children) {
            count++;
            child.style.display = 'flex';
            if (count > visibleSlidesTablet) {
                child.style.display = 'none';
            }
          }
    }
};
