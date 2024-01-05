const main = document.querySelector('main');
const form = document.querySelector('form');
const input = form.querySelector('input');
const submitBtn = form.querySelector('[type="submit"]');
const backBtn = document.querySelector('.complete--wrapper button');
const hero = document.querySelector('.hero');
const emailTarget = document.querySelector('.complete--wrapper b');
const reg = /.@.+(\.).+[^.]$/;

submitBtn.addEventListener('mouseover', () => {
  hero.classList.add('on');
});
submitBtn.addEventListener('mouseleave', () => {
  hero.classList.remove('on');
});

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const isValid = reg.test(input.value);

  if (isValid) {
    main.classList.add('done');
    form.classList.remove('hold');
    emailTarget.textContent = input.value;
    input.value = '';
  } else form.classList.add('hold');
});

backBtn.addEventListener('click', (ev) => {
  main.classList.remove('done');
});
