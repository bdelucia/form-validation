const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const password = document.getElementById('password');

email.addEventListener('input', () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('I am expecting an email address!');
  } else {
    email.setCustomValidity('');
  }
});

country.addEventListener('input', () => {
  if (country.validity.typeMismatch) {
    email.setCustomValidity('I am expecting a text-based inputs!');
  } else {
    email.setCustomValidity('');
  }
});
