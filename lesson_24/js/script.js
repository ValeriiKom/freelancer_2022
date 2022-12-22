"use strict"
/*
// Задача №1
// Хто попаде в консоль першим Вася чи Коля?
function showName() {
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');


// Задача №2
// Чи вірно викликана функція
showMessage();
function showMessage() {
	console.log('Сообщение');
}


// Задача №3
// Верно ли вызвана функция
showMessage();
let showMessage = function () {
	console.log('Сообщение');
}

*/
// Задача №4
// Як вирішити проблему?

// "use strict"
// let showMessage;
// if (2 > 1) {
// 	showMessage = function() {
// 		console.log('Повідомлення');
// 	}
// }
// showMessage();



//Відео "Масиви в JAVASCRIPT"
// Задача №1.
// Яке число (довжину) отримаємо?
// let arr = ['Ваня', 'Іштван', 'Оля',];
// let newArr = arr;
// newArr.push('Петя');
// console.log(arr.length);

// Задача №2.
/*
Створіть масив users з елементами "Ваня" та "Іштван".
Додайте "Оля" в кінець.
Замініть значення "Іштван" на "Петя".
Ваш код для пошуку значення має
працювати для масивів любої довжини.
Видаліть перший елемент масива та покажіть його.
Вставте "Маша" і "Паша" на початок масиву.
*/
/*
let users = ["Ваня", "Іштван"];
console.log(users);

users.push("Оля");
console.log(users);

users.forEach((item, index) => {
	if (item === "Іштван") {
		users.splice(index, 1, "Петя")
	}
});
console.log(users);

console.log(users.shift());

users.unshift("Маша", "Паша");
console.log(users);
*/
/*
// Задача №3.
// Видалити елемент 'Іштван' і повернути його в змінну
let arr = ['Ваня', 'Іштван', 'Оля',];
let deletedItem;
console.log(arr);
arr.forEach((item, index) => {
	if (item === "Іштван") {
		deletedItem = arr[index];
		arr.splice(index, 1);
	}
});
console.log(deletedItem);
console.log(arr);
*/
/*
// Задача №4.
//Перетворити рядок в масив
let str = 'Ваня,Іштван,Оля';
let arrFromStr = str.split(',');
console.log(str);
console.log(arrFromStr);
*/
/*
// Задача №5.
// Чому дорівнює previousValue на початку роботи метода?
let arrTwo = [9, 2, 8,];
console.log(arrTwo);
let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});
*/
/*
// JavaScript Document object model (DOM)
// Задача №1.
// Отримати у змінну елемент з атрибутом data-say-hi
// і прочитати значення цього атрибуту
//<div data-say-hi="yes">Привіт!</div>
const dom1 = document.querySelector('.dom-1');
console.log(dom1);
console.log(dom1.dataset.sayHi);
*/

// Задача №2.
//Отримати у змінну елемент з текстом Йончі
//<ul>
//	<li>Корчі</li>
//	<li>Йончі</li>
//</ul>
/*
const itemsList = document.querySelectorAll('.dom-2>li');
console.log(itemsList);
let itemLookingFor;
for (let i = 0; i < itemsList.length; ++i) {
	if (itemsList[i].innerText = 'Йончі') {
		itemLookingFor = 'Йончі';
	} else {
		console.log('Немає тут такого')
	}
}
console.log(itemLookingFor);
*/

// Задача №3.
// Отримати у змінну колекцію елементів з класом like
//div class="like"></div>
//<div class="subscribe"></div>
//<div class="like subscribe"></div>
//const likeItems = document.querySelectorAll('.like');
//console.log(likeItems);


// Задача №4.
// Куда добавится <li>Текст</li> ?



// JS
//const list = document.querySelector('ul');
//console.log(list);
//list.insertAdjacentHTML(
//	'beforeend',
//	'<li>Текст</li>'
//);

/*
// HTML
<ul>
	<li>Пункт №1</li>
	<li>Пункт №2</li>
</ul>
*/




//Відео "JavaScript розміри, прокрутка і координати елементів на сторінці і вікні браузера"

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

const firstElement = document.querySelector('.dom-1');
const secondElement = document.querySelector('.like');
const thirdElement = document.querySelector('.test3');

const firstElementCoords = firstElement.getBoundingClientRect();
const secondElementCoords = secondElement.getBoundingClientRect();
const thirdElementCoords = thirdElement.getBoundingClientRect();

console.log(firstElementCoords);
console.log(secondElementCoords);
console.log(thirdElementCoords);



