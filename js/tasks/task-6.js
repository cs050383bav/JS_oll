// todo Example 6 - Методы строк и чейнинг
/*
 * Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в килограммах на квадрат высоты человека в метрах.

 * Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

* Индекс массы тела необходимо округлить до одной цифры после запятой;

 */

// let weight = '88,3';
// let height = '1.75';

// if (weight.includes(',')) {
//     weight = weight.replace(',', '.');
// }

// const bmi = parseFloat(weight) / Math.pow(parseFloat(height), 2);

// console.log(bmi.toFixed(1));

const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line

const message = 'You picked ${productName}, price per item is ${pricePerItem} credits';

console.log(message);