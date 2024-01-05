const form = document.querySelector('form');
const inputs = Array.from(form.querySelectorAll('input'));
const [dayWrapper, monthWrapper, yearWrapper] = Array.from(form.querySelectorAll('label'));
const [resultYear, resultMonth, resultDay] = Array.from(document.querySelectorAll('[class^=result--]'));

inputs.forEach((input, x) => {
  input.addEventListener('input', () => {
    const result = input.value.replace(/[^0-9]/g, '');
    inputs[x].value = result;
  });
});

const isValid = (day, month, year) => {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  const isValidYear = (new Date().getFullYear() - year) >= 0;
  const isValidMonth = month >= 1 && month <= 12;
  const isValidDay = (
    () => {
      let max = 31;

      if (month === 2) max = (isLeap) ? 29 : 28;
      else if (
        month === 4 || month === 6 || month === 9 || month === 11
      ) max = 30;

      return (day <= max && day >= 1);
    }
  )();

  if (isValidYear) yearWrapper.className = '';
  else yearWrapper.className = 'err';

  if (isValidMonth) monthWrapper.className = '';
  else monthWrapper.className = 'err';

  if (isValidDay) dayWrapper.className = '';
  else dayWrapper.className = 'err';

  return (isValidYear && isValidMonth && isValidDay);
};

const isEmpty = () => {
  let result = false;
  if (inputs[0].value === '') {
    dayWrapper.className = 'empty';
    result = true;
  } else dayWrapper.className = '';
  if (inputs[1].value === '') {
    monthWrapper.className = 'empty';
    result = true;
  } else monthWrapper.className = '';
  if (inputs[2].value === '') {
    yearWrapper.className = 'empty';
    result = true;
  } else yearWrapper.className = '';
  return result;
};

const calcAge = () => {
  const currentDate = new Date();
  const [day, month, tempYear] = inputs.map(({ value }) => Number(value));
  const year = (tempYear < 100)
    ? (tempYear + 2000 <= currentDate.getFullYear() ? tempYear + 2000 : tempYear + 1900)
    : tempYear;
  inputs[2].value = year;

  if (isValid(day, month, year)) {
    const date = new Date(`${year}-${month}-${day}`);
    const test = currentDate.getTime() - date.getTime();

    if (test >= 0) {
      const hai = new Date(test);
      resultYear.textContent = Number(hai.getFullYear() - 1970);
      resultMonth.textContent = Number(hai.getMonth());
      resultDay.textContent = Number(hai.getDate());

      yearWrapper.className = '';
      monthWrapper.className = '';
      dayWrapper.className = '';
    }
  }
};

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  if (isEmpty()) return;
  calcAge();
});
