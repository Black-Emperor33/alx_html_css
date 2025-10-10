document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  // Toggle the nav visibility
  menuToggle.addEventListener('click', function () {
    navbar.classList.toggle('active');
  });

  // Optional: close menu when a link is clicked
  const navLinks = navbar.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navbar.classList.remove('active');
    });
  });
});
