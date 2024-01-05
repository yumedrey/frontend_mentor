const nav = document.querySelector('header nav');
const navBtns = Array.from(document.querySelectorAll('[class^=nav--btn]'));

navBtns.forEach((el) => {
  el.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});
