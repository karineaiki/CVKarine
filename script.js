
const links = document.querySelectorAll('a[href^="#"]');

window.addEventListener('scroll', () => {
  links.forEach(link => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target.getBoundingClientRect().top < window.innerHeight / 2) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
