const navBar = document.getElementById('nav');

window.addEventListener('scroll', () => {
  let scrolled = window.scrollY;

  if (scrolled >= 299) {
    navBar.classList.add('navBarScrolling');
  } else {
    navBar.classList.remove('navBarScrolling');
  }
  console.log(scrolled);
});
