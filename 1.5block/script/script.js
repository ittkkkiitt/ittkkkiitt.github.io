const btnMore = document.querySelector(".brands-menu__btn-more");
const content = document.querySelector(".brands-menu__nav--advanced");
const caption = document.querySelector(".btn-more__caption");
btnMore.addEventListener("click", btnClick);
function btnClick() {
    caption.innerHTML =
    (caption.innerHTML === 'Показать все') ? caption.innerHTML = 'Скрыть' : caption.innerHTML = 'Показать все';
    content.classList.toggle("brands-menu__nav--advanced--open");
}
const windowWidth = window.innerWidth;
const swiper = new Swiper('.swiper', {
    slidesPerView: windowWidth/240,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true
});
