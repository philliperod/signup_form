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
    addError('first__name', 'First Name cannot be empty');
  }
  if (last === '') {
    addError('last__name', 'Last Name cannot be empty');
  }
  if (email === '') {
    addError('email', 'Email address cannot be empty');
  }
  if (password === '') {
    addError('password', 'Password cannot be empty');
  }
});

function addError(field, message) {
  const error = (form[field].parentNode.querySelector('em').innerText = message);
  const errorIcon = (form[field].parentNode.querySelector('img').style.display = 'block');
  const errorBorder = (form[field].parentNode.querySelector('input').style.borderColor = 'hsl(0, 100%, 74%)');
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
