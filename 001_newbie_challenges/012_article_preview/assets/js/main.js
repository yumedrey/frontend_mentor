const buttons = Array.from(document.querySelectorAll('.profile button'));
const profile = document.querySelector('.profile');

buttons.forEach((x) => {
  x.addEventListener('click', () => {
    profile.classList.toggle('open');
  });
});
