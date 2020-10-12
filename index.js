const form = document.getElementById('form');
const firstName = document.getElementById('first__name');
const lastName = document.getElementById('last__name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (enter) => {
  enter.preventDefault();

  const first = form['first__name'].value;
  const last = form['last__name'].value;
  const email = form['email'].value;
  const password = form['password'].value;

  if (first === '') {
    const error = (form['first__name'].parentNode.querySelector('em').innerText = 'First Name cannot be empty');
    const errorIcon = (form['first__name'].parentNode.querySelector('img').style.display = 'block');
    const errorBorder = (form['first__name'].parentNode.querySelector('input').style.borderColor = 'hsl(0, 100%, 74%)');
  }
});

function addError(field, message) {
  const error = (form[field].parentNode.querySelector('em').innerText = message);
  const errorIcon = (form[field].parentNode.querySelector('img').style.display = 'block');
  const errorBorder = (form[field].parentNode.querySelector('input').style.borderColor = 'hsl(0, 100%, 74%)');
}
