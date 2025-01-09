// Function to generate a random password
function generatePassword() {
  const passwordField = document.getElementById('password');
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  const passwordLength = 12; // You can adjust the password length here
  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordField.value = password; // Set the generated password in the input field
}

// Function to copy the password to clipboard
function copyPassword() {
  const passwordField = document.getElementById('password');
  
  if (passwordField.value) {
    navigator.clipboard.writeText(passwordField.value).then(() => {
      alert('Password copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy password: ', err);
    });
  } else {
    alert('Please generate a password first!');
  }
}

// Function to reset the password field
function resetPassword() {
  const passwordField = document.getElementById('password');
  passwordField.value = ''; // Clear the password input field
}
