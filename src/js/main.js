const header = document.querySelector('.header');
const navBtnOpen = document.querySelector('.burger-btn');
const navBtnClose = document.querySelector('.nav-mobile__button');
const navMobile = document.querySelector('.nav-mobile');
const navDesktop = document.querySelector('.nav-desktop');
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer__text');
const mobileLinks = document.querySelectorAll(".nav-mobile__link")
function getYear() {
	footerText.innerHTML = ` 2012-${currentYear} &copy Copyright by <span class="footer__text--decoration">
	Crypto Brain 
</span>`;
}
getYear();

function openNav() {
	navMobile.classList.add('nav-mobile--active');
}
function closeNav() {
	navMobile.classList.remove('nav-mobile--active');
}

mobileLinks.forEach(el => el.addEventListener('click', closeNav))

const allSection = document.querySelectorAll('section');

function revealSecion(entries, observer) {
	const [entry] = entries;
	if (!entry.isIntersecting) return;
	entry.target.classList.remove('section--hidden');
	observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSecion, {
	root: null,
	threshold: 0.15,
});

allSection.forEach(function (section) {
	sectionObserver.observe(section);
	section.classList.add('section--hidden');
});

addEventListener("resize", ()=>{
	navMobile.style.height = header.offsetHeight + navDesktop.offsetHeight + 'px';
})
navBtnOpen.addEventListener('click', openNav);
navBtnClose.addEventListener('click', closeNav);
