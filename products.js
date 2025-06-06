
document.addEventListener("DOMContentLoaded", function () {
  const store = document.getElementById("store");
  store.innerHTML = `
    <section><h2>Reunion Fees</h2>
      <div class="product"><h3>Reunion Fee - 12 and Over ($15)</h3></div>
      <div class="product"><h3>Reunion Fee - Under 12 (Free)</h3></div>
    </section>
    <section><h2>T-Shirts</h2>
      <div class="product"><h3>T Shirt Style 1 - SLF</h3></div>
      <div class="product"><h3>T Shirt Style 1 - LLF</h3></div>
      <div class="product"><h3>T Shirt Style 2</h3></div>
    </section>
    <section><h2>Hoodies</h2>
      <div class="product"><h3>Hoodie Style 1 - SLF</h3></div>
      <div class="product"><h3>Hoodie Style 1 - LLB</h3></div>
      <div class="product"><h3>Hoodie Style 2</h3></div>
    </section>
    <section><h2>Hats</h2>
      <div class="product"><h3>Hat Style 1</h3></div>
      <div class="product"><h3>Hat Style 2</h3></div>
    </section>`;
});
