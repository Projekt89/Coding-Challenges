const emailInput = document.getElementById('email')

emailInput.addEventListener('keyup', (e) => {
  const validate = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@{1}[a-zA-Z0-9]+\.[a-zA-Z]{2,4}(\.{1}[a-zA-Z]{2,4})?$/g

  if (validate.test(e.target.value)) {
    emailInput.classList.add('validated')
  } else {
    emailInput.classList.remove('validated')
  }
  
})