document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.cta-button');
  if (btn) {
    btn.addEventListener('click', function() {
      window.location.href = '/pages/about.html';
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});
