console.log("Script loaded!");
let prevScrollPos = window.scrollY; // Use scrollY
const navbar = document.querySelector('.folders-container');

window.addEventListener('scroll', () => {
  const currentScrollPos = window.scrollY; // Use scrollY

  if (currentScrollPos > prevScrollPos) {
    // Scrolling down
    navbar.classList.add('hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('hidden');
  }

  

  prevScrollPos = currentScrollPos;
});