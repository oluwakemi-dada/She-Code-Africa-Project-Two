const form = document.querySelector('.form');

// Error Message
const showError = () => {
  const errorBox = `
      <div class='error'>
        <p>Please fill all fields</p>
      </div>
    `;

  form.insertAdjacentHTML('beforebegin', errorBox);
};

// Form Submit
const submitForm = (e) => {
  e.preventDefault();
  // Form inputs
  const firstname = document.querySelector('.firstname').value;
  const lastname = document.querySelector('.lastname').value;
  const email = document.querySelector('.email').value;
  const company = document.querySelector('.company').value;
  const phone = document.querySelector('.phone').value;
  const message = document.querySelector('.message').value;
  const others = document.querySelector('.others').value;
  const budget = document.querySelectorAll('input[name="budget"]');

  const budgetArr = Array.from(budget);
  let selectedValue;
  budgetArr.forEach((rb) => {
    if (rb.checked) {
      selectedValue = rb.value;
    }
  });

  document.querySelector('.error').style.display = 'none';

  if (
    firstname !== '' &&
    lastname !== '' &&
    email !== '' &&
    company !== '' &&
    phone !== '' &&
    message !== '' &&
    selectedValue !== undefined &&
    others !== ''
  ) {
    window.location.href = 'form-redirect.html';
  } else {
    window.scroll({
      top: 260,
      behavior: 'smooth',
    });

    showError();
    setTimeout(() => {
      document.querySelector('.error').style.display = 'none';
    }, 3000);
  }
};

if (form) {
  form.addEventListener('submit', submitForm);
}
