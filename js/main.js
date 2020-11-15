const navbar = document.querySelector('.top-navbar');

function navbarHandler() {
  if (window.scrollY > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

document.addEventListener('scroll', navbarHandler);
