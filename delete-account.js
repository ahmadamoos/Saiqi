(() => {
  const form = document.querySelector('.deletion-card form');
  const account = document.getElementById('account');
  const phone = document.getElementById('contact-phone');
  const phoneField = document.getElementById('phone-field');
  const validateContact = () => {
    const method = form.elements['Preferred contact method'].value;
    const needsPhone = method !== 'Email';
    phoneField.hidden = !needsPhone;
    phone.disabled = !needsPhone;
    phone.required = needsPhone && account.value.includes('@');
    account.setCustomValidity(account.value.trim() ? '' : 'Enter your registered phone number or company email.');
    phone.setCustomValidity(phone.required && !phone.value.trim() ? 'Enter a phone number for WhatsApp or a phone call.' : '');
  };
  form.addEventListener('input', validateContact);
  form.addEventListener('change', validateContact);
  window.addEventListener('pageshow', validateContact);
  validateContact();
})();
