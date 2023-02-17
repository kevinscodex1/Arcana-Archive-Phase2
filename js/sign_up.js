function validatePassword(password) {
  
  // Get the form input elements
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');

  // Get the values of the input elements
  const username = usernameInput.value.toLowerCase();
  const email = emailInput.value.toLowerCase();

  // Check the length of the username string
  if (username.length < 5) {
    // Alert the user that the username is too short
    alert('Username must have a minimum of 5 characters.');
    return false;
  }

  // Check if the email already exists in local storage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = users.find(user => user.email.toLowerCase() === email);
  if (existingUser) {
    // Alert the user that the email already exists
    alert('Email already exists.');
    return false;
  }

  // Add the new user to the users array
  const newUser = { username, email };
  users.push(newUser);

  // Store the updated users array in local storage
  localStorage.setItem('users', JSON.stringify(users));

  // Check length
  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return false;
  }

  // Check for special symbol
  let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (!specialChars.test(password)) {
    alert('Password must contain at least one special character.');
    return false;
  }

  // Check for capital letter
  let capitalLetters = /[A-Z]/;
  if (!capitalLetters.test(password)) {
    alert('Password must contain at least one capital letter.');
    return false;
  }

  // Check for spaces
  if (password.indexOf(' ') >= 0) {
    alert('Password cannot contain spaces.');
    return false;
  }

  // Check if the password and confirm password match
  if (confirmPassword.value !== password) {
    alert('Password and confirm password do not match.');
    return false;
  }

  // Password meets all criteria
  return true;
}

function showPassword() {
  const passwordInput = document.getElementById('password');
  if (passwordInput.type == 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

function showConfirmPassword() {
  const confirmPasswordInput = document.getElementById('confirm-password');
  if (confirmPasswordInput.type == 'password') {
    confirmPasswordInput.type = 'text';
  } else {
    confirmPasswordInput.type = 'password';
  }
}

function register() {
  const password = document.getElementById('password').value;
  if (validatePassword(password)) {
    alert('Password is valid');
  } else {
    alert('Password is not valid');
  }
}
