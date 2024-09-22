const footerYear = document.querySelector('.footer__year')
const navMobile = document.querySelector('.nav')
const burger = document.querySelector('.hamburger')
const footer = document.querySelector('.footer')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerHTML = year
}
const handleNav = () => {
	burger.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
}

handleCurrentYear()
burger.addEventListener('click', handleNav)


const navItem = document.querySelectorAll('.nav__link')
const removeNav = () => {
	navMobile.classList.remove('nav-mobile--active')
}
navItem.addEventListener('click', removeNav)