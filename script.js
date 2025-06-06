
window.addEventListener('DOMContentLoaded', () => {
  fetch('products.js')
    .then(res => res.text())
    .then(js => {
      eval(js);
      if (typeof populateProducts === 'function') populateProducts();
    });
});
