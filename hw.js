//Створити змінні celsius, fahrenheit для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
const celsius = 18;
const fahrenheit = celsius * 9 / 5 + 32;
console.log(fahrenheit);



//Створити змінну daysInMonth для зберігання кількості днів у місяці. Обчислити кількість hoursInMonth годин та minutesInMonth хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.
const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(minutesInMonth);



//Створити змінні health, energy для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.
const pudgeHealth = 2892;
const pudgeMana = 1059;
const rubickMana = 1815;
//(Рубік вкрав хук Пуджа своєю ультою, яка витрачає 25 мани, і використав його проти Пуджа. Хук витрачає 110 мани та завдає 360 шкоди. Але щоб Рубік міг вкрасти у героя будь-який навик, цей герой спочатку має використати той навик. :)
const hook = 110;
const spellSteal = 25;
const health = pudgeHealth - 360;
const manaSpent = spellSteal + hook;
const energyPudge = pudgeMana - hook;
const energyRubick = rubickMana - manaSpent;
console.log(health, energyPudge, energyRubick);



//Створити змінну totalPrice для зберігання суми покупки в магазині. Застосувати знижку discount в розмірі 10% до цієї суми за допомогою оператора множення. Результат зберегти в змінній discountedPrice та вивести результат в консоль.
const totalPrice = 1786;
const discount = 0.1;
const discountedPrice = totalPrice * discount;
console.log(discountedPrice);



//Створити змінну const floatNumber = 12.78 для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого. Результат зберегти в змінній roundedDown та вивести результат в консоль.
const floatNumber = 12.78;
console.log(Math.floor(floatNumber));



//Створити змінну const floatString = "45.67"  для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число. Результат зберегти в змінній parsedFloat та вивести результат в консоль.
const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(parsedFloat);



//Створити змінну const intString = "123" для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній parsedIntта вивести результат в консоль.
const intString = "123";
const parsedInt = parseInt(intString);
console.log(parsedInt);



//Створити змінну number для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа. Результат зберегти в змінній sqrtNumber та вивести результат в консоль.
const number = 74;
const sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);



//Створити змінні const integer = 42 та const stringNumber = "256" для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній convertedInt та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок. Результат зберегти в змінній convertedString та вивести результат в консоль.
const integer = 42;
const stringNumber = "256";
const convertedInt = parseInt(stringNumber);
const convertedString = toString(integer);
console.log(convertedInt, convertedString);