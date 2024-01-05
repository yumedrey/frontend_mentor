const form = document.querySelector('form');
const input = form.querySelector('input');
const reg = /.@.+(\.).+[^.]$/;

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const isValid = reg.test(input.value);
  if (!isValid) form.classList.add('hold');
  else form.submit();
});
