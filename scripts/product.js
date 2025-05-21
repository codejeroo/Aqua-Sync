 const hamburger = document.querySelector(".hamburger");
 const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });



  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.fade-in-up, .fade-in').forEach(el => {
      el.style.opacity = '1';
    });
  });

