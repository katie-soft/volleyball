/* Burger menu */

const burgerButton = document.querySelector('#burger-button');
const closeBurgerIcon = document.querySelector('#close-burger');
const burgerMenu = document.querySelector('#header-nav');
const overlay = document.querySelector('#overlay');

burgerButton.addEventListener('click', openBurgerMenu);
closeBurgerIcon.addEventListener('click', closeBurgerMenu);

function openBurgerMenu() {
  burgerMenu.classList.add('burger-menu_opened');
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeBurgerMenu() {
  burgerMenu.classList.remove('burger-menu_opened');
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
}

/* Photo gallery */

const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* Modal windows */

const modal = document.querySelector('#user-modal');
const userModalOpenButton = document.querySelector('#user-button');
const userModalCloseButton = modal.querySelector('#user-modal-close-button');

userModalOpenButton.addEventListener('click', () => modal.showModal());
userModalCloseButton.addEventListener('click', () => modal.close());