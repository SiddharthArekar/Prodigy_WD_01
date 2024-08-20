// Add scroll event listener
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  
  if (window.scrollY > 50) {  // If scrolled more than 50px
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
