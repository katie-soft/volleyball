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

const modalContentLogin = document.querySelector('.modal__login');
const modalContentRegistration = document.querySelector('.modal__registration');
const modalButtonLogin = document.querySelector('.button_login');
const modalButtonsRegistration = document.querySelectorAll('.button_registration');

modalButtonLogin.addEventListener('click', (event) => {
  event.stopPropagation();
  event.preventDefault();
  modalContentLogin.style.display = 'block';
  modalContentRegistration.style.display = 'none';
});

modalButtonsRegistration.forEach(btn => btn.addEventListener('click', (event) => {
  console.log(event.target)
  event.stopPropagation();
  event.preventDefault();
  modalContentLogin.style.display = 'none';
  modalContentRegistration.style.display = 'block';
}));

/* Login tabs */

const tabButtonEmail = document.querySelector('#tab-button-email');
const tabButtonPhone = document.querySelector('#tab-button-phone');
const tabFormEmail = document.querySelector('#tab-form-email');
const tabFormPhone = document.querySelector('#tab-form-phone');

tabButtonEmail.addEventListener('click', openEmailTab);
tabButtonPhone.addEventListener('click', openPhoneTab);

function openEmailTab() {
  tabFormPhone.classList.remove('modal__form_active');
  tabFormEmail.classList.add('modal__form_active');
  tabButtonEmail.classList.add('modal__tab_active');
  tabButtonPhone.classList.remove('modal__tab_active');
}

function openPhoneTab() {
  tabFormEmail.classList.remove('modal__form_active');
  tabFormPhone.classList.add('modal__form_active');
  tabButtonPhone.classList.add('modal__tab_active');
  tabButtonEmail.classList.remove('modal__tab_active');
}