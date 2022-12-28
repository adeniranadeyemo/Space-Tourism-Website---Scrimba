// const nav = document.querySelector('.primary-navigation');
// const navOpen = document.querySelector('.mobile-nav-toggle');
// const navClose = document.querySelector('.close-icon');

// navOpen.addEventListener('click', () => {
//   nav.classList.add('open-nav');
//   navOpen.style.display = "none";
// });

// navClose.addEventListener('click', () => {
//   nav.classList.remove('open-nav');
//   navOpen.style.display = "block";
// });

// OR

const nav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible');
  if (visibility === 'false') {
    nav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  } else {
    nav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }
})