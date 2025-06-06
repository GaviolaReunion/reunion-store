
function viewCart() {
  window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_cart&business=gaviolafamilyreunion@gmail.com&display=1', '_blank');
}

// Sample logic to render products (real implementation would loop through products.js)
document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("product-sections");
  section.innerHTML += "<p>Products will be listed here dynamically using products.js</p>";
});
