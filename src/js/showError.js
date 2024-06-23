export default function showError(parent, param) {
  const errorEl = document.createElement('div');
  errorEl.classList.add('error');
  errorEl.classList.add(`error-${param}`);

  const errorInput = document.createElement('span');
  if (param == 'empty') {
    errorInput.textContent = 'Please type a symbol';
  }
  errorEl.insertAdjacentElement('afterbedin', errorInput);
  if (!parent.querrySelector(`error-${param}`)) {
    parent.insertAdjacentElement('afterbegin', errorEl)
  }

  setTimeout(() => {
    parent.removeChild(errorEl);
  }, 2500);
}
