"use strict"


// === JavaScript Document object model (DOM) ===
//
// Задача №1.
// Отримати у змінну елемент з атрибутом data-say-hi
// і прочитати значення цього атрибуту
//<div data-say-hi="yes">Привіт!</div>

// const element = document.querySelector("[data-say-hi]");
// console.log(element);
// const sayHi = element.getAttribute("data-say-hi");
// console.log(sayHi);

// Задача №2.
//Отримати у змінну елемент з текстом Йончі
//<ul>
//	<li>Корчі</li>
//	<li>Йончі</li>
//</ul>

// const items = document.querySelectorAll('.dom-2>li');
// console.log(items);
// let itemLookingFor;
// for (let item of items) {
// 	item.textContent === 'Йончі' ? itemLookingFor = item : null;
// }
// console.log(itemLookingFor);

// Задача №3.
// Отримати у змінну колекцію елементів з класом like
//div class="like"></div>
//<div class="subscribe"></div>
//<div class="like subscribe"></div>

//const likeItems = document.querySelectorAll('.like');
//console.log(likeItems);

// Задача №4.
// Куди додасться <li>Текст</li> ?

// JS
//const list = document.querySelector('ul');
//console.log(list);
//list.insertAdjacentHTML(
//	'beforeend',
//	'<li>Текст</li>'
//);

// HTML
//<ul>
//	<li>Пункт №1</li>
//	<li>Пункт №2</li>
//</ul>


// === JavaScript розміри, прокрутка і координати елементів на сторінці і вікні браузера ===

//Задача №1.
//Дізнатись ширину полоси прокрутки
// const widthWithoutScroll = document.documentElement.clientWidth;
// console.log(widthWithoutScroll);
// const widthWindow = window.innerWidth;
// console.log(widthWindow);
// const scrollWidth = widthWindow - widthWithoutScroll;
// console.log(scrollWidth);

//Задача №2.
// Змусьте браузер прокрутитися на 100px зверху
// через секунду після открытия відкриття сторінки

// function setScroll() {
// 	window.scrollTo( {
// 		top: 100,
// 		left: 0,
// 		behavior: "smooth"
// 	});
// }
// setTimeout(setScroll, 1000);


// Задача №3.
// Отримайте координати трьох елементів на сторінці

// const firstElement = document.querySelector('.dom-1');
// const secondElement = document.querySelector('.like');
// const thirdElement = document.querySelector('.test3');

// const firstElementCoords = firstElement.getBoundingClientRect();
// const secondElementCoords = secondElement.getBoundingClientRect();
// const thirdElementCoords = thirdElement.getBoundingClientRect();

// console.log(firstElementCoords);
// console.log(secondElementCoords);
// console.log(thirdElementCoords);


// === JavaScript Події ===
/*
Пишемо форму пошуку, яка відкривається по кліку на іконку
а закривається по кліку на любе місце сторінки, окрім самої форми.
Також, закрити форму можна по клавіші ескейп (Esc) на клавиатурі.
Для поля вводу пошукового запиту додаємо лічильник символів.
*/

// ===== Підрахунок кількості символів для вводу =====

const formInput = document.querySelector('.form__input');
const formInputLimit = formInput.getAttribute('maxlength');

console.log(formInputLimit);

const symbolCounter = document.querySelector('.symbol-counter span');
symbolCounter.innerHTML = formInputLimit;

formInput.addEventListener("keyup", symbolSetCounter);
formInput.addEventListener("keydown", function (event) {
	if (event.repeat) symbolSetCounter();
});

function symbolSetCounter() {
	const symbolCounterResult = formInputLimit - formInput.value.length;
	symbolCounter.innerHTML = symbolCounterResult;
}


// ===== Поява та приховування рядка пошуку =====

const formBody = document.querySelector('.form');

document.addEventListener("click", form);

function form(event) {
	if (event.target.closest('.form__image')) {
		formBody.classList.toggle('_active');
	}
	if (!event.target.closest('.form')) {
		formBody.classList.remove('_active');
	}
}

document.addEventListener('keyup', function (event) {
	if (event.code === 'Escape') {
		formBody.classList.remove('_active');
	}
});