// Задача №1

// Напиши код, який отримає масив і використовує цикл for,

// який для кожного елемента масиву буде виводити в консоль повідомлення у форматі:

/* < номер елемента > - <значення елемента >. */

//Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масива['Mango', 'Poly', 'Ajax']

// з індексом 0 буде виведено  1 - Mango,

// а для індекса 2 выведет 3 - Ajax.

// const users = ["Mango", "Poly", "Ajax"];

// ......................

// Задача №2

// Визначення типу значення, оператор typeof

const productName = 'Mango';

const pricePerItem = 150;

const isOnSale = false;

const error = null;

let quantity;

console.log(typeof productName)
console.log(typeof pricePerItem)
console.log(typeof isOnSale)
console.log(typeof error)
console.log(typeof quantity)
// .....................

// Задача №3

// Шаблонні строки

// // Написати фразу за допомогою шаблонних строк Привіт, меня  звати < імя >, мні  < стільки-то >

// років і мені подобається < хоббі >, де дані з < ..... > - змінні вставлені в строку.

const name = 'Artur';

const age = 15 ;

const hobby = 'football';

const message = ;

console.log(message);



let cost;
const subscription = "premium";

// if (subscription === "free") {
//  cost = 0;
// } else if (subscription === "pro") {
//  cost = 100;
// } else if (subscription === "premium") {
//  cost = 500;
// } else {
//  console.log("Invalid subscription type");
// }
switch (subscription) {
    case "free":
        cost = 0;
         break;
    case "pro":
        cost = 100;
        break;
    case "premium";
        cost = 500:
        break;
    default:
        console.log(Invalid subscription type);
        break;
}
console.log(cost); // 500