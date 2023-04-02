const burgerBtn = document.querySelector('.burger-btn')
const mobileNav = document.querySelector('.mobile-nav')
const menuItems = document.querySelectorAll('.menu-item')
const desktopNav = document.querySelector('.desktop-nav')

const fitnessListItem = document.querySelectorAll('.fitness-list-item')
const fitnessCards = document.querySelectorAll('.fitness-description-card')

// BURGER BUTTON
const mobileMenuToggle = () => {
	burgerBtn.classList.toggle('burger-x')
	mobileNav.classList.toggle('mobile-active')
}

menuItems.forEach(menuItem => {
	menuItem.addEventListener('click', () => {
		if (burgerBtn.classList.contains('burger-x') && mobileNav.classList.contains('mobile-active')) {
			burgerBtn.classList.remove('burger-x')
			mobileNav.classList.remove('mobile-active')
		}
	})
})

// NAWIGACJA

const fixNav = () => {
	if (window.scrollY > desktopNav.offsetHeight - 40) {
		desktopNav.classList.add('desktop-nav-scroll')
	} else {
		desktopNav.classList.remove('desktop-nav-scroll')
	}
}

// FITNESS PAGE - SUBMENU
fitnessListItem.forEach((listItem, idx) => {
	listItem.addEventListener('click', () => {
		clearFitness()
		const fitnessCard = fitnessCards[idx]
		fitnessCard.classList.add('fitness-active')
		listItem.classList.add('fitness-item-active')
	})
})

const clearFitness = () => {
	fitnessListItem.forEach(listItem => {
		listItem.classList.remove('fitness-item-active')
	})
	fitnessCards.forEach(fitnessCard => {
		fitnessCard.classList.remove('fitness-active')
	})
}

// EVENT LISTENERS

window.addEventListener('scroll', fixNav)
burgerBtn.addEventListener('click', mobileMenuToggle)
