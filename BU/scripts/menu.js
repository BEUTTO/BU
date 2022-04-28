//APP_MENU

const appMenu = document.getElementsByClassName('app-menu')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]
  appMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})