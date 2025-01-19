const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

function validateInput(inputElement, errorMessage) {
  if (inputElement.validity.typeMismatch || inputElement.value === '') {
    inputElement.setCustomValidity(errorMessage);
    return false;
  } else {
    inputElement.setCustomValidity('');
    return true;
  }
}

function checkEmailInput() {
  return validateInput(email, 'Please enter a valid email address');
}

function checkCountryInput() {
  return validateInput(country, 'Country cannot be empty.');
}

function checkZipcodeInput() {
  // Check if the input is invalid due to pattern mismatch
  if (zipCode.validity.patternMismatch) {
    zipCode.setCustomValidity('Zip code must be exactly 5 digits.');
    return false;
  } else if (zipCode.value === '') {
    zipCode.setCustomValidity('Zip code cannot be empty.');
    return false;
  } else {
    zipCode.setCustomValidity('');
    return true;
  }
}

function checkPasswordInput() {
  return validateInput(password, 'Password cannot be empty.');
}

// Add blur event listeners for validation
email.addEventListener('blur', () => {
  checkEmailInput();
  email.reportValidity(); // Show the error message if invalid
});
country.addEventListener('blur', () => {
  checkCountryInput();
  country.reportValidity(); // Show the error message if invalid
});
zipCode.addEventListener('blur', () => {
  checkZipcodeInput();
  zipCode.reportValidity(); // Show the error message if invalid
});
password.addEventListener('blur', () => {
  checkPasswordInput();
  password.reportValidity(); // Show the error message if invalid
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form submission

  const isEmailValid = checkEmailInput();
  const isCountryValid = checkCountryInput();
  const isZipcodeValid = checkZipcodeInput();
  const isPasswordValid = checkPasswordInput();

  if (isEmailValid && isCountryValid && isZipcodeValid && isPasswordValid) {
    alert('High five!');
  } else {
    if (!isEmailValid) {
      email.focus();
      email.reportValidity();
    } else if (!isCountryValid) {
      country.focus();
      country.reportValidity();
    } else if (!isZipcodeValid) {
      zipCode.focus();
      zipCode.reportValidity();
    } else if (!isPasswordValid) {
      password.focus();
      password.reportValidity();
    }
  }
});
