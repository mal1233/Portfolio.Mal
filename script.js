document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thanks for reaching out!");
});

const header = document.querySelector('h1');
header.addEventListener('mouseenter', () => {
  header.textContent = "🔥 Welcome, Future Developer!";
});

header.addEventListener('mouseleave', () => {
  header.textContent = "Welcome to Malakai's Portfolio";
});

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page from reloading
  alert("Thanks for reaching out! I'll get back to you soon.");
  form.reset(); // Clear the form fields
});

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // stops actual submission
  alert("Thanks for reaching out! I'll get back to you asap!!");
  this.reset(); // clears form
});