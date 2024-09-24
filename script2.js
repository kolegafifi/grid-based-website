const navMobile = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__link')
const burger = document.querySelector('.hamburger')

const hideNav = () => {
	navMobile.classList.remove('nav-mobile--active')
}

navLinks.addEventListener('click', hideNav)
