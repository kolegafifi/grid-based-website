const footerYear = document.querySelector('.footer__year')
const navMobile = document.querySelector('.nav')
const burger = document.querySelector('.hamburger')
const footer = document.querySelector('.footer')
const navLinkInvest = document.querySelector('.nav__link-invest')
const navLinkPlan = document.querySelector('.nav__link-plan')
const navLinkContact = document.querySelector('.nav__link-contact')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerHTML = year
}
const hideNav = () => {
	burger.classList.remove('is-active')
	navMobile.classList.remove('nav-mobile--active')
}

function handleNav() {
	burger.classList.toggle('is-active')
	navMobile.classList.add('nav-mobile--active')
}

handleCurrentYear()
burger.addEventListener('click', handleNav)
navLinkInvest.addEventListener('click', hideNav)
navLinkPlan.addEventListener('click', hideNav)
navLinkContact.addEventListener('click', hideNav)
