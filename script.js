const form = document.querySelector('form');
const container = document.querySelector('.container');
const cardSuccess = document.querySelector('.card-success');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!isValidEmail(emailInput.value)) {
    emailInput.classList.add('error-sign');
    return;
  }

  container.classList.add('hidden');
  cardSuccess.classList.remove('hidden');
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Event Listener on dismiss button
const dismissButton = document.querySelector('.card-success button');
dismissButton.addEventListener('click', () => {
  cardSuccess.classList.add('hidden');
  container.classList.remove('hidden');

  // Reset Form fields after going back to first page
  form.reset();
});
