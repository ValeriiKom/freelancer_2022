"use strict"
/*
//Відео "Оператори JAVASCRIPT"

//Варіант №1
console.log('35' + - "22");
console.log(typeof('35' + - "22"));
//13

//Варіант №2
console.log('35' * "22");
//770

//Варіант №3
//console.log('558' > 22++);
//true

//Варіант №4
let userCounter = 0;
let newUsers = userCounter++;
console.log(newUsers);
//1

//Варіант №5
console.log(!false && 11 || 18 && !'');
//18

//Варіант №6
let nameA = 0;
console.log(nameA ?? "Без імені");


//Відео "IF ELSE в JAVASCRIPT"

// let message = (92 > '11');
// console.log(message);
// console.log(typeof(message));

//Варіант №1
if (1 === "1") {
	console.log('Істина');
} else {
	console.log('Хиба');
}

//Варіант №2
if (5 == "5") {
	console.log('Істина');
} else {
	console.log('Хиба');
}

//Варіант №3
let message = (92 > '11' && 58 < 100) ? 'Істина' : 'Хиба';
console.log(message);

//Варіант №4
if (0) {
	console.log('Хиба');
} else if (" ") {
	console.log('Істина');
}
*/

//Відео "Цикли FOR і WHILE в JAVASCRIPT"

//Задача №1
let i = 1;

while (i <= 5) {
	console.log(i);
	i++;
}

i = 1;
do {
	console.log(i);
	i++;
} while (i <= 5);

for (let j = 1; j <= 5; j++) {
	console.log(j);
}

//Задача №2
/*
let num = 8;
while (num) {
	//Последний результат 0, верно?
	console.log(num);
	num--;
}
*/

//Задача №3
for (let num = 0; num < 3; num++) {
	console.log(`Число: ${num}`);
}

let num = 0;
while (num < 3) {
	console.log(`Число: ${num}`);
	num++;
}

//Задача №4
//Цикл №1
firstFor: for (let num = 0; num < 2; num++) {
	//Цикл №2
	for (let size = 0; size < 3; size++) {
		console.log(size);
		if (size === 1) {
			break firstFor;
		}
	}
}


//Відео "Числа в JAVASCRIPT"
console.log("Числа в JAVASCRIPT");

// Задача №1
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne);

// Задача №2
let value = "135.58px";
let someNum = parseFloat(value);
console.log(someNum);

// Задача №3
let someValue = 58 + "Фрілансер";
if (isNaN(someValue)) {
	console.log('Результат виразу NaN');
}

// Задача №4
console.log(Math.max(10, 58, 39, -150, 0));

// Задача №5
console.log(Math.floor(58.858));


//Відео "Рядки в JAVASCRIPT"

/*
// Задача №1
let fls = "фрілансер";
let text = 'Привіт! Я ${fls}';
// Очікуємо: Привіт! Я фрілансер
console.log(text);
*/

// Задача №2
let text = 'фрілансер';
console.log(text[5]);


// Задача №3. Верно?
let text1 = 123 + "456";
// Ожидаем 579
console.log(text1);

// Задача №4. Отримати рядок у верхньому регістрі
let text2 = 'фрілансер';
console.log(text2.toUpperCase());

// Задача №5. отримати підрядок "лан":
let text3 = 'фрілансер';
console.log(text3.slice(3, 6));


// Задача №6. true або false ?
let text4 = 'фрілансер';
console.log(text4.includes('лан', 4));
