(function () {
  'use strict';

  var form = document.getElementById('contactForm');
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var phoneInput = document.getElementById('phone');
  var messageInput = document.getElementById('message');
  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  var phoneError = document.getElementById('phoneError');
  var messageError = document.getElementById('messageError');
  var successMsg = document.getElementById('formSuccess');

  var fields = [
    { el: nameInput, error: nameError, validator: function (v) { return v.trim() !== ''; } },
    { el: emailInput, error: emailError, validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
      } },
    { el: phoneInput, error: phoneError, validator: function (v) {
        return /^\d+$/.test(v.trim());
      } },
    { el: messageInput, error: messageError, validator: function (v) { return v.trim() !== ''; } }
  ];

  function validateField(field) {
    var valid = field.validator(field.el.value);
    if (!valid) {
      field.el.classList.add('error');
    } else {
      field.el.classList.remove('error');
    }
    return valid;
  }

  function validateAll() {
    var allValid = true;
    fields.forEach(function (f) {
      if (!validateField(f)) {
        allValid = false;
      }
    });
    return allValid;
  }

  fields.forEach(function (f) {
    f.el.addEventListener('blur', function () { validateField(f); });
    f.el.addEventListener('input', function () {
      if (f.el.classList.contains('error')) {
        validateField(f);
      }
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateAll()) {
      successMsg.style.display = 'block';
      form.reset();
      fields.forEach(function (f) { f.el.classList.remove('error'); });
      setTimeout(function () {
        successMsg.style.display = 'none';
      }, 5000);
    }
  });
})();
