const main = document.querySelector('main');
const form = document.querySelector('form');
const inputs = Array.from(form.querySelectorAll('input'));
const cardName = document.querySelector('.card__info__name');
const cardNumber = document.querySelector('.card__number');
const cardMM = document.querySelector('.card-mm');
const cardYY = document.querySelector('.card-yy');
const cardCVC = document.querySelector('.card__back__cvc');
const backHomeBtn = document.getElementById('back-home-btn');

const inputo = [inputs[0], inputs[2], inputs[3], inputs[4]];
const inputoAlt = ['JANE APPLESEED', '00', '00', '000'];
const inputoTarget = [cardName, cardMM, cardYY, cardCVC];

const isStringValid = (data) => {
  const current = data.replace(/\s/g, '');
  const pattern = /^[A-Za-z]+$/;
  return pattern.test(current);
};
const isNumberValid = (data) => {
  const current = data.replace(/\s/g, '');
  const pattern = /^[0-9]+$/;
  return pattern.test(current);
};
const clearAll = () => {
  inputs.forEach((el, id) => {
    inputs[id].value = '';
  });
  inputoTarget.forEach((el, id) => {
    inputoTarget[id].textContent = inputoAlt[id];
  });
  cardNumber.textContent = '0000 0000 0000 0000';
};

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  let howValid = true;

  inputs.forEach((el, id) => {
    if ((id === 2 || id === 3)) {
      if (inputs[2].value === '' || inputs[3].value === '') {
        inputs[2].parentElement.className = 'empty';
        howValid = false;
      } else if (!isNumberValid(inputs[2].value) || !isNumberValid(inputs[3].value)) {
        inputs[2].parentElement.className = 'err';
        howValid = false;
      } else inputs[2].parentElement.className = '';
    } else if (el.value === '') {
      inputs[id].parentElement.className = 'empty';
      howValid = false;
    } else if ((id === 0 && !isStringValid(el.value)) || (id > 0 && !isNumberValid(el.value))) {
      inputs[id].parentElement.className = 'err';
      howValid = false;
    } else {
      inputs[id].parentElement.className = '';
    }
  });

  if (howValid) main.className = 'done';
});

inputs[1].addEventListener('input', function inputCheck({ inputType }) {
  const test = this.value.replace(/\s/g, '');
  if (
    inputType === 'deleteContentBackward'
    && (this.value.length === 4 || this.value.length === 9 || this.value.length === 14)
  ) {
    this.value = this.value.slice(0, this.value.length - 1);
  } else {
    if (test.length >= 4) this.value = `${test.slice(0, 4)} ${test.slice(4, 8)}`;
    if (test.length >= 8) this.value = `${this.value} ${test.slice(8, 12)}`;
    if (test.length >= 12) this.value = `${this.value} ${test.slice(12, 16)}`;
  }
  cardNumber.textContent = (this.value !== '') ? this.value : '0000 0000 0000 0000';
});

inputo.forEach((el, id) => {
  el.addEventListener('input', function inputValues() {
    inputoTarget[id].textContent = (this.value !== '') ? this.value : inputoAlt[id];
  });
});

backHomeBtn.addEventListener('click', () => {
  main.classList.remove('done');
  clearAll();
});
