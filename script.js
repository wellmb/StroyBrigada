document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('request-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
      form.reset();
    });
  }
});
