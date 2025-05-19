document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector("nav ul.nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    hamburger.classList.toggle("toggle");
  });
});


// Success Popup Logic
function closePopup() {
  document.getElementById("success-message").classList.add("hidden");
}

function validateForm() {
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!firstName || !lastName || !email || !message) {
    alert("Please fill out all fields.");
    return false;
  }

  // Show success popup
  document.getElementById("success-message").classList.remove("hidden");
  return false; // Prevent actual form submission
}

window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});
