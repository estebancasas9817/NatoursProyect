'use strict';
const navigation__buttom = document.querySelector('.navigation__buttom');
const navigation__item = document.querySelectorAll('.navigation__item');
const navigation__background = document.querySelector(
	'.navigation__background'
);
const navigation__nav = document.querySelector('.navigation__nav');
navigation__buttom.addEventListener('click', () => {
	navigation__background.classList.toggle('none');
	navigation__nav.classList.toggle('width');
});

for (let i = 0; i < navigation__item.length; i++) {
	navigation__item[i].addEventListener('click', () => {
		navigation__background.classList.toggle('none');
		navigation__nav.classList.toggle('width');
	});
}
