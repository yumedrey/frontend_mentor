const main = document.querySelector('main');
const form = document.querySelector('main form');
const radios = Array.from(form.querySelectorAll('input'));

const img = main.querySelector('img');
const resultStar = document.getElementById('result-star');
const h1 = main.querySelector('h1');
const p = main.querySelector('p');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const value = radios.find((x) => x.checked);

  if (value) {
    main.className = 'done';
    img.setAttribute('src', 'assets/images/illustration-thank-you.svg');
    resultStar.textContent = value.value;

    h1.textContent = 'Thank you!';
    p.textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
  } else {
    alert("Please select rate 1 - 5")
  }
});
