// --------------------------------------------------------1

// --------------------------------------------------------2
let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line

pricePerItem = 2000 + 1500;
productName = "Repair droid";
console.log(productName);
// --------------------------------------------------------3
const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline =  true;
const isAdmin  = false;

// --------------------------------------------------------4
const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = (pricePerItem * orderedQuantity);
console.log = totalPrice
// --------------------------------------------------------5

const productName = "Droid";
const pricePerItem;
const price = 3500;
const message = `You picked ${productName}, price per item is ${price} credits`;

// --------------------------------------------------------6

const orderedQuantity = 6;
const pricePerDroid = 800;
const deliveryFee =50
const totalPrice = (orderedQuantity * pricePerDroid + deliveryFee);
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;


// --------------------------------------------------------7
// Change code below this line
function sayHi() {
    console.log('Hello, this is my first function!');
}

sayHi(); // multiply function invocation

// ---------------------------------------------------------8
// Change code below this line
function add(a, b, c) {
    console.log(`Addition result equals ${a + b + c}`);
    // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// ---------------------------------------------------------9

function add(a, b, c) {
    return a + b + c;
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

// ---------------------------------------------------------9

function makeMessage(name, price) {
    const message = `You picked Radar, ${price} per item is ${6150} credits`;
    return message;
}

console.log(makeMessage(`Radar`, 6150));
makeMessage('Scanner', 3500);
makeMessage('Reactor', 8000);
makeMessage('Engine', 4070);

// You picked Radar, price per item is 6150 credits

// ---------------------------------------------------------10
function calculateTotalPrice (orderedQuantity, pricePerItem) {
    const totalPrice = (orderedQuantity * pricePerItem);
  
    return totalPrice;
  }
  
      calculateTotalPrice(5, 100);
      calculateTotalPrice(8, 60);
      calculateTotalPrice(3, 400);
      calculateTotalPrice(1, 3500);
      calculateTotalPrice(12, 70);
  
    //   console.log(calculateTotalPrice(5, 100));
    //   console.log(calculateTotalPrice(8, 60));
    //   console.log(calculateTotalPrice(3, 400));
    //   console.log(calculateTotalPrice(1, 3500));
    //   console.log(calculateTotalPrice(12, 70));
// ---------------------------------------------------------12

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

    const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  
    return message;
  }
  makeOrderMessage(2, 100, 50)
  makeOrderMessage(4, 300, 100)
  makeOrderMessage(10, 70, 200)
  
  console.log(makeOrderMessage(2, 100, 50));
  
//   You ordered droids worth 250 credits. Delivery (50 credits) is included in total price.

// ---------------------------------------------------------13
function isAdult(age) {
    // Change code below this line
    const passed = age >= 18;
  
    // Change code above this line
    return passed;
  }
  isAdult(20)
  isAdult(14)
  isAdult(8)
  isAdult(37)
  
  console.log(isAdult(37));

// true

// ---------------------------------------------------------14

function isValidPassword(password) {
    const SAVED_PASSWORD = "jqueryismyjam";
    // Change code below this line
    const isMatch = SAVED_PASSWORD === password;
  
    // Change code above this line
    return isMatch;
  }
  
  isValidPassword("mangodab3st")
  isValidPassword("kiwirul3z")
  isValidPassword("jqueryismyjam")
  
  console.log(isValidPassword('jqueryismyjam'));

//   true

// ---------------------------------------------------------15

function checkAge(age) {
    let message;
  
    if (age >= 18) { 
      message = 'You are an adult';
    } else {
      message = 'You are a minor';
    }
  
    return message;
  }
  
  checkAge(20)
  checkAge(8)
  checkAge(14)
  checkAge(38)
  
  console.log(checkAge(38))//   You are an adult
  console.log(checkAge(14))//   You are a minor

// ---------------------------------------------------------16

function checkStorage(available, ordered) {
    let message;
    // Change code below this line
  
  if(available > ordered) {message = "Order is processed, our manager will contact you."}
  
  else {message = "Not enough goods in stock!"}
    // Change code above this line
    return message;
  }
  
  checkStorage(100, 50)
  checkStorage(100, 130)
  checkStorage(200, 20)
  checkStorage(200, 150)
  checkStorage(150, 180)
  
    console.log(checkStorage(150, 180))    // Not enough goods in stock!


// ---------------------------------------------------------17

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

console.log(d) // 2

// ---------------------------------------------------------18

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    const totalPrice = (pricePerDroid * orderedQuantity)
    let message;
    if (totalPrice <= customerCredits) {message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
    }
    else{
      message = `Insufficient funds!`
    }
    return message;
  }
  
  
  makeTransaction(3000, 5, 23000)
  makeTransaction(1000, 3, 15000)
  makeTransaction(5000, 10, 8000)
  makeTransaction(2000, 8, 1000)
  makeTransaction(500, 10, 5000)
  
  console.log(makeTransaction(1000, 3, 15000)) //   You ordered 3 droids, you have 12000 credits left

// ---------------------------------------------------------19

function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
  
    if (password === null) {
      message = "Canceled by user!";
    } else if (password === ADMIN_PASSWORD) {
      message = 'Welcome!';
    } else {
      message = "Access denied, wrong password!";
    }
  
    return message;
  }
  
  checkPassword("mangohackzor")
  checkPassword(null)
  checkPassword("polyhax")
  checkPassword("jqueryismyjam")
  
  console.log(checkPassword(null))//   Canceled by user!
  

// ---------------------------------------------------------20

function checkStorage(available, ordered) {
    let message;
   if (ordered === 0) {
     message = "There are no products in the order!"
   }
   else if (available >= ordered) {
     message = "The order is accepted, our manager will contact you"
   }
   else{
     message = "Your order is too large, there are not enough items in stock!"
   }
  
    return message;
  }
  
  checkStorage(100, 50)
  checkStorage(100, 130)
  checkStorage(70, 0)
  checkStorage(200, 20)
  checkStorage(200, 250)
  checkStorage(150, 0)
  
  
  console.log(checkStorage(200, 250))//   Your order is too large, there are not enough items in stock!
  console.log(checkStorage(200, 200))//   The order is accepted, our manager will contact you

// ---------------------------------------------------------21

function isNumberInRange(start, end, number) {
  const isInRange = (start <= number && number <= end); // Change this line

  return isInRange;
}
isNumberInRange(20, 50, 24)   
isNumberInRange(10, 30, 17)   

isNumberInRange(10, 30, 5)  
isNumberInRange(20, 50, 76)  

console.log(isNumberInRange(20, 50, 76))// false

// ---------------------------------------------------------22

function checkIfCanAccessContent(subType) {
  const canAccessContent =(
    subType === `pro` || subType === `vip` 
  ) ; // Change this line

  return canAccessContent;
}

checkIfCanAccessContent("pro")
checkIfCanAccessContent("starter")
checkIfCanAccessContent("vip")
checkIfCanAccessContent("free")
console.log(checkIfCanAccessContent("tiu"))// false

// ---------------------------------------------------------23

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; 

  return isNotInRange;
}

isNumberNotInRange(10, 30, 17)
isNumberNotInRange(10, 30, 5)
isNumberNotInRange(20, 50, 24)
isNumberNotInRange(20, 50, 76)

// ---------------------------------------------------------24

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;

  if (totalSpent < 5000) {discount = BASE_DISCOUNT}
  else if(totalSpent >= 5000 && totalSpent < 20000) {discount = BRONZE_DISCOUNT}
  else if(totalSpent >= 20000 && totalSpent < 50000) {discount = SILVER_DISCOUNT}
  else if (totalSpent >= 50000) {discount = GOLD_DISCOUNT}


  return discount;
}


console.log(getDiscount(137000))// 0.1
console.log(getDiscount(46900))// 0.05
console.log(getDiscount(8250))// 0.02
console.log(getDiscount(1300))// 0
console.log(getDiscount(5000))// 0.02
console.log(getDiscount(20000))// 0.05
console.log(getDiscount(50000))// 0.1


// ---------------------------------------------------------25

function checkStorage(available, ordered) {
  let message;

message = available >= ordered ? 'The order is accepted, our manager will contact you' : 'Not enough goods in stock!';

  return message;
}

console.log(checkStorage(100, 50))// The order is accepted, our manager will contact you
console.log(checkStorage(100, 130))// Not enough goods in stock!
console.log(checkStorage(200, 20))// The order is accepted, our manager will contact you
console.log(checkStorage(200, 150))// The order is accepted, our manager will contact you
console.log(checkStorage(150, 180))// Not enough goods in stock!

// ---------------------------------------------------------26

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
message = ADMIN_PASSWORD === password ? "Access is allowed" : "Access denied, wrong password!";
  // Change code above this line
  return message;
}

console.log( checkPassword("jqueryismyjam"))// Access is allowed
console.log( checkPassword("angul4r1sl1f3"))// Access denied, wrong password!
console.log( checkPassword("r3actsux"))// Access denied, wrong password!

// ---------------------------------------------------------27

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) {
    case "starter":
      price = 0
      break;

    case "organization":
      price = 50
      break;

    case `professional`:
      price = 20;
      break;
  }

  // Change code above this line
  return price;
}

console.log(getSubscriptionPrice("professional"))//20
console.log(getSubscriptionPrice("organization"))//50
console.log(getSubscriptionPrice("starter"))//0

// ---------------------------------------------------------28

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

switch (password){
case null:
message = "Canceled by user!";
break;

case ADMIN_PASSWORD:
message ="Welcome!";
break;

default:
message = "Access denied, wrong password!";
}

  return message;
}

console.log( checkPassword("mangohackzor"))// Access denied, wrong password!
console.log( checkPassword(null))// Canceled by user!
console.log( checkPassword("polyhax"))// Access denied, wrong password!
console.log( checkPassword("jqueryismyjam"))// Welcome!



// ---------------------------------------------------------29

function getShippingCost(country) {
  let message;
  // Change code below this line
switch(country){
case "China":
message = "Shipping to China will cost 100 credits";
break;

case "Chile":
message = "Shipping to Chile will cost 250 credits";
break;

case "Australia":
message = "Shipping to Australia will cost 170 credits";
break;

case "Jamaica":
message = "Shipping to Jamaica will cost 120 credits";
break;

default:
message = "Sorry, there is no delivery to your country";
}
  // Change code above this line
  return message;
}

console.log(getShippingCost("Australia"))// Shipping to Australia will cost 170 credits
console.log(getShippingCost("Germany"))// Sorry, there is no delivery to your country
console.log(getShippingCost("China"))// Shipping to China will cost 100 credits
console.log(getShippingCost("Chile"))// Shipping to Chile will cost 250 credits
console.log(getShippingCost("Jamaica"))// Shipping to Jamaica will cost 120 credits

// ---------------------------------------------------------30

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

console.log( getNameLength("Poly"))// Name Poly is 4 characters long
console.log( getNameLength("Harambe"))// Name Harambe is 7 characters long
console.log( getNameLength("Billy"))// Name Billy is 5 characters long
console.log( getNameLength("Joe"))// Name Joe is 3 characters long

// ---------------------------------------------------------31

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopicLength - 1];

// Change code above this line
console.log(courseTopicLength)// 21
console.log(firstElement)// J
console.log(lastElement)// s

// ---------------------------------------------------------32

function getSubstring(string, length) {
  
  const substring = string.slice(0, length); 
                  message.slice(0, maxLength)
  return substring;
}

   console.log( getSubstring('Hello world', 3))//    Hel
   console.log( getSubstring("Hello world", 6))// Hello 
   console.log( getSubstring("Hello world", 8))// Hello wo
   console.log( getSubstring("Hello world", 11))// Hello world
   console.log( getSubstring("Hello world", 0))// 

// ---------------------------------------------------------33

function formatMessage(message, maxLength) {
  let result;
  if(message.length <= maxLength) {result = message}
  else {result = message.slice(0, maxLength) + "..."}
  // Change code below this line

  /// Change code above this line
  return result;
}

console.log(formatMessage("Curabitur ligula sapien", 16))// Curabitur ligula...
console.log(formatMessage("Curabitur ligula sapien", 23))// Curabitur ligula sapien
console.log(formatMessage("Vestibulum facilisis purus nec", 20))// Vestibulum facilisis...
console.log(formatMessage("Vestibulum facilisis purus nec", 30))// Vestibulum facilisis purus nec
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15))// Nunc sed turpis...
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41))// Nunc sed turpis a felis in nunc fringilla

// ---------------------------------------------------------34

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}


    console.log( normalizeInput("Hello world"))//     hello world
    console.log( normalizeInput("This ISN'T SpaM"))// this isn't spam
    console.log( normalizeInput("Big SALE"))

// ---------------------------------------------------------35

function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
   return result;
 }
 
 console.log(checkForName("Egor Kolbasov", "Egor"))//  true
 console.log(checkForName("Egor Kolbasov", "egor"))//  false
 console.log(checkForName("Egor Kolbasov", "egOr"))//  false
 console.log(checkForName("Egor Kolbasov", "Zhenya"))//  false
 console.log(checkForName("Vadim Nekrasov", "Vadim"))//  true
 console.log(checkForName("Vadim Nekrasov", "vadim"))//  false
 console.log(checkForName("Vadim Nekrasov", "Dima"))//  false

// ---------------------------------------------------------36

return message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');

// ---------------------------------------------------------1

function checkAge(age) {
  if (age > 18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

console.log(checkAge(20))
console.log(checkAge(8))
console.log(checkAge(14))
console.log(checkAge(38))


// ---------------------------------------------------------3

function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return "Your order is empty!";
  } 
    if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  } 
    return  "The order is accepted, our manager will contact you";
  }

  console.log(checkStorage(100, 50)    )// "The order is accepted, our manager will contact you"
console.log(checkStorage(100, 130)    )// "Your order is too large, not enough goods in stock!"
console.log(checkStorage(70, 0)      )// "Your order is empty!"
console.log(checkStorage(200, 20)    )// "The order is accepted, our manager will contact you"
console.log(checkStorage(200, 250)   )// "Your order is too large, not enough goods in stock!"
console.log(checkStorage(150, 0)   )// "Your order is empty!"

// ---------------------------------------------------------4
// Change code below this line
const fruits = ["apple", "plum", "pear", "orange"]

console.log(fruits)// [ 'apple', 'plum', 'pear', 'orange' ]

// ---------------------------------------------------------5
const fruits = ["apple", "plum", "pear", "orange"];

const firstElement = fruits[0]
const secondElement = fruits[1]
const lastElement = fruits[3]  // или const lastElement = fruits[fruits.length - 1]


console.log(firstElement )// apple
console.log(secondElement)// plum
console.log(lastElement)// orange

// ---------------------------------------------------------6
const fruits = ["apple", "plum", "pear", "orange"];
fruits[1] = "peach"
fruits[3] = "banana"
console.log(fruits)// [ 'apple', 'peach', 'pear', 'banana' ]

// ---------------------------------------------------------7
const fruits = ["apple", "peach", "pear", "banana"];
const fruitsArrayLength = fruits.length

console.log(fruitsArrayLength)// 4

// ---------------------------------------------------------8
const fruits = ["apple", "peach", "pear", "banana"];

const lastElementIndex = fruits.length -1
const lastElement = fruits[lastElementIndex]


// ---------------------------------------------------------9
function getExtremeElements(array) {
  return array = [array[0], array[array.length - 1]]
}

console.log (getExtremeElements([1, 2, 3, 4, 5]))// [ 1, 5 ]
console.log (getExtremeElements(["Earth", "Mars", "Venus"]))// [ 'Earth', 'Venus' ]
console.log (getExtremeElements(["apple", "peach", "pear", "banana"]))// [ 'apple', 'banana' ]

// ---------------------------------------------------------10

function splitMessage(message, delimeter) {
  let words;
  words = message.split(delimeter)

  return words;
}

console.log( splitMessage("Mango hurries to the train", " "))// [ 'Mango', 'hurries', 'to', 'the', 'train' ]
console.log( splitMessage("Mango", ""))// [ 'M', 'a', 'n', 'g', 'o' ]
console.log( splitMessage("best_for_week", "_"))( splitMessage("best_for_week", "_"))// [ 'best', 'for', 'week' ]

// ---------------------------------------------------------11
function calculateEngravingPrice(message, pricePerWord) {
  let totalSum
  totalSum = message.split(" ").length * pricePerWord
  
  return totalSum
  
  }
  
  console.log( calculateEngravingPrice("JavaScript is in my blood", 10))// 50
  console.log( calculateEngravingPrice("JavaScript is in my blood", 20))// 100
  console.log( calculateEngravingPrice("Web-development is creative work", 40))// 160
  console.log( calculateEngravingPrice("Web-development is creative work", 20))// 80

// ---------------------------------------------------------12
function makeStringFromArray(array, delimeter) {
  let string;
  
  string = array.join(delimeter)
  
  return string;
}

console.log( makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "))// Mango hurries to the train
console.log( makeStringFromArray(["M", "a", "n", "g", "o"], ""))// Mango
console.log( makeStringFromArray(["top", "picks", "for", "you"], "_"))// top_picks_for_you

// ---------------------------------------------------------13
function slugify(title) {

  let lowSplit;
    lowSplit = title.toLowerCase().split(" ");
  let slug;
  slug = lowSplit.join("-")
  return slug;
}

console.log( slugify("Arrays for begginers"))// arrays-for-begginers
console.log( slugify("English for developer"))// english-for-developer
console.log( slugify("Ten secrets of JavaScript"))// ten-secrets-of-javascript
console.log( slugify("How to become a JUNIOR developer in TWO WEEKS"))// how-to-become-a-junior-developer-in-two-weeks

// ---------------------------------------------------------14
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2) ;
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls)// [ 'apple', 'plum' ]
console.log(nonExtremeEls)// [ 'plum', 'pear', 'orange' ]
console.log(lastThreeEls)// [ 'pear', 'orange', 'banana' ]

// ---------------------------------------------------------15
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); 

console.log(allClients)// [ 'Mango', 'Ajax', 'Poly', 'Kiwi', 'Peach', 'Houston' ]

// ---------------------------------------------------------16
function makeArray(firstArray, secondArray, maxLength) {
  let ollArrey
      ollArrey = firstArray.concat(secondArray).slice(0, maxLength)

  return ollArrey

 }

   console.log( makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))// [ 'Mango', 'Poly', 'Ajax' ]
   console.log( makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4))// [ 'Mango', 'Poly', 'Houston', 'Ajax' ]
   console.log( makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3))// [ 'Mango', 'Ajax', 'Chelsea' ]
   console.log( makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2))// [ 'Earth', 'Jupiter' ]
   console.log( makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4))// [ 'Earth', 'Jupiter', 'Neptune', 'Uranus' ]
   console.log( makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0))// []

// ---------------------------------------------------------17
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
}
// 3
// 4
// 5
// 6
// 7

// ---------------------------------------------------------18
function calculateTotal(number) {
  let sum = 0;
  for (let i = 0; i <= number; i += 1) { sum += i;  }
  return sum}
  console.log( calculateTotal(1))// 1
  console.log( calculateTotal(3))// 6
  console.log( calculateTotal(7))// 28
  console.log( calculateTotal(18))// 171
  console.log( calculateTotal(24))// 300

// ---------------------------------------------------------19(черный)
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}
// apple
// plum
// pear
// orange

// ---------------------------------------------------------20
function calculateTotalPrice(order) {
  let total = 0;

for (let i = 0; i < order.length; i += 1) {total += order[i];
}  
return total;
}

// ---------------------------------------------------------21
function findLongestWord(string) {

  let splitString = string.split(" ");
  let longestWord = 0;
  let word = null

for (let i = 0; i < splitString.length; i += 1) {
  if(splitString[i].length > longestWord){longestWord = splitString[i].length;word = splitString[i]}
}
return word;
}

console.log(findLongestWord( "The quick brown fox jumped over the lazy dog"))
console.log(findLongestWord( "Google do a roll"))
console.log(findLongestWord( "May the force be with you"))
// console.log(findLongestWord())

// ---------------------------------------------------------22
function createArrayOfNumbers(min, max) {
  const numbers = [];
for(let i = min; i <= max; i += 1)
  numbers.push(i);
  return numbers;
}
console.log(createArrayOfNumbers(1, 3))// [ 1, 2, 3 ]
console.log(createArrayOfNumbers(14, 17))// [ 14, 15, 16, 17 ]
console.log(createArrayOfNumbers(29, 34))// [ 29, 30, 31, 32, 33, 34 ]

// ---------------------------------------------------------23
function filterArray(numbers, value) {
  const newArrey = []
  // Change code below this line
for(let i = 0; i <= numbers.length; i += 1){
 if (numbers[i] > value) {newArrey.push(numbers[i])}
}
return newArrey;
}

console.log(filterArray([1, 2, 3, 4, 5], 3))[ 4, 5 ]
console.log(filterArray([1, 2, 3, 4, 5], 4))[ 5 ]
console.log(filterArray([1, 2, 3, 4, 5], 5))[]
console.log(filterArray([12, 24, 8, 41, 76], 38))[ 41, 76 ]
console.log(filterArray([12, 24, 8, 41, 76], 20))[ 24, 41, 76 ]

// ---------------------------------------------------------24
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit)
}

console.log(checkFruit("plum"))// true
console.log(checkFruit("mandarin"))// false
console.log(checkFruit("pear"))// true
console.log(checkFruit("Pear"))// false
console.log(checkFruit("apple"))// true

// ---------------------------------------------------------25*
function getCommonElements(array1, array2) {
  const commonElements = [];
for(let key of array1){
  if (array2.includes(key)) {
        commonElements.push(key);
        }
}
 return commonElements;
}

console.log(getCommonElements([1, 2, 3], [2, 4]))// [ 2 ]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))// [ 1, 2 ]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))// [ 12, 27, 3 ]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))// [ 10, 30, 40 ]
console.log(getCommonElements([1, 2, 3], [10, 20, 30]))// []

// ---------------------------------------------------------26
// ---------------------------------------------------------27
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let number of numbers) {

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}
console.log(filterArray([1, 2, 3, 4, 5], 3))[ 4, 5 ]
console.log(filterArray([1, 2, 3, 4, 5], 4))[ 5 ]
console.log(filterArray([1, 2, 3, 4, 5], 5))[]
console.log(filterArray([12, 24, 8, 41, 76], 38))[ 41, 76 ]
console.log(filterArray([12, 24, 8, 41, 76], 20))[ 24, 41, 76 ]

// ---------------------------------------------------------28
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;


// ---------------------------------------------------------29
function getEvenNumbers(start, end) {
  // Change code below this line
  let venNumbers = []
for (let i = start; i <= end; i += 1)
{if (i % 2 === 0){venNumbers.push(i)}

}

return venNumbers
   // Change code above this line
 }

console.log(getEvenNumbers(2, 5))// [ 2, 4 ]
console.log(getEvenNumbers(3, 11))// [ 4, 6, 8, 10 ]
console.log(getEvenNumbers(6, 12))// [ 6, 8, 10, 12 ]
console.log(getEvenNumbers(8, 8))// [ 8 ]
console.log(getEvenNumbers(7, 7))// []

// ---------------------------------------------------------30
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break
  }
}
console.log(number)// 10

// ---------------------------------------------------------31
function findNumber(start, end, divisor) {
  // Change code below this line

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) return i;
  }
  // Change code above this line
}

console.log(findNumber(2, 6, 5))// 5
console.log(findNumber(8, 17, 3))// 9
console.log(findNumber(6, 9, 4))// 8
console.log(findNumber(16, 35, 7))// 21

// ---------------------------------------------------------32
function includes(array, value) {
  for(let i of array) {
    if ( i === value) {
      return true;
    }    
  } return false;
  }   
// ИЛИ

function includes(array, value) {
  for(let i = 0; i<array.length;i ++) {
    if ( array[i] === value) {
      return true;
    }    
  } return false;
  }   


// ---------------------------------------------------------1
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"]
  };
  
  console.log(apartment)
  // {
  //   imgUrl: 'https://via.placeholder.com/640x480',
  //   descr: 'Spacious apartment in the city center',
  //   rating: 4,
  //   price: 2153,
  //   tags: [ 'premium', 'promoted', 'top' ]
  // }

// ---------------------------------------------------------2
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email:"henry.carter@aptmail.com",
  },
};

  console.log(apartment)
  // {
  //   imgUrl: 'https://via.placeholder.com/640x480',
  //   descr: 'Spacious apartment in the city center',
  //   rating: 4,
  //   price: 2153,
  //   tags: [ 'premium', 'promoted', 'top' ],
  //   owner: {
  //     name: 'Henry',
  //     phone: '982-126-1588',
  //     email: 'henry.carter@aptmail.com'
  //   }
  // }

// ---------------------------------------------------------3
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Change code above this line
console.log(aptRating)// 4
console.log(aptDescr)// Spacious apartment in the city center
console.log(aptPrice)// 2153
console.log(aptTags)// [ 'premium', 'promoted', 'top' ]

// ---------------------------------------------------------4
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];
// Change code above this line
console.log(ownerName)// Henry
console.log(ownerPhone)// 982-126-1588
console.log(ownerEmail)// henry.carter@aptmail.com
console.log(numberOfTags)// 3
console.log(firstTag)// premium
console.log(lastTag)// top

// ---------------------------------------------------------5
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// Change code above this line

console.log(aptRating)// 4
console.log(aptDescr)// Spacious apartment in the city center
console.log(aptPrice)// 2153
console.log(aptTags)// [ 'premium', 'promoted', 'top' ]

// ---------------------------------------------------------6
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.price=5000;
apartment.rating=4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted');

console.log(apartment)
// Change code below this line

// {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: [ 'premium', 'promoted', 'top', 'trusted' ],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// }


// ---------------------------------------------------------7
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};


    apartment.area = 60;
    apartment.rooms = 3;
    apartment.location = {
      country: "Jamaica",
      city: "Kingston",}

// Change code below this line
console.log(apartment)



// {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: [ 'premium', 'promoted', 'top', 'trusted' ],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   },
//   area: 60,
//   rooms: 3,
//   location: { country: 'Jamaica', city: 'Kingston' }
// }

// ---------------------------------------------------------8
const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line
  price,
  image,
  tags,
  name,
  // Change code above this line
};

// ---------------------------------------------------------9
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
[emailInputName]: "henry.carter@aptmail.com",
[passwordInputName]: "jqueryismyjam"



  // Change code above this line
};

const propName = "name";
const user = {
  age: 25,
  // Имя этого свойства будет взято из значения переменной propName
  [propName]: "Генри Сибола"
};

console.log(user); // { age: 25, name: 'Генри Сибола' }
// ---------------------------------------------------------10
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line

for (const key in apartment ) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(apartment[key]);
  keys.push(key);
  values.push(apartment[key]);
}
console.log(values)
// descr
// Spacious apartment in the city center
// rating
// 4
// price
// 2153
// [ 'Spacious apartment in the city center', 4, 2153 ]

// ---------------------------------------------------------11
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if (apartment.hasOwnProperty(key)){
  keys.push(key);
  values.push(apartment[key]);
}
  // Change code above this line
}

console.log(apartment){
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153
// }
console.log(keys)// [ 'descr', 'rating', 'price' ]
console.log(values)// [ 'Spacious apartment in the city center', 4, 2153 ]

// ---------------------------------------------------------12
function countProps(object) {
  let propCount = 0;
  // Change code below this line
for(key in object){
if (object.hasOwnProperty(key)){
  propCount  += 1;
}
}
// Change code above this line
  return propCount;
}

console.log(countProps({}))// 0

console.log(countProps({ name: "Mango", age: 2 }))// 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))// 3


// ---------------------------------------------------------13
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

// console.log(keys)
for(const key of keys){
  values.push(apartment[key]);
}
console.log(values) // [ 'Spacious apartment in the city center', 4, 2153 ]

// ---------------------------------------------------------14
function countProps(object) {
  // Change code below this line
  const keys = Object.keys(object);
  const propCount = keys.length;
  return propCount;
  // Change code above this line
}

console.log(countProps({}))// 0
console.log(countProps({ name: "Mango", age: 2 })) // 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })) // 3

// ---------------------------------------------------------15
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

console.log(keys)// [ 'descr', 'rating', 'price' ]
console.log(values)// [ 'Spacious apartment in the city center', 4, 2153 ]

// ---------------------------------------------------------16
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
const values = Object.values(salaries);
for(valWorker of values)
totalSalary += valWorker
  // Change code above this line
  return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))// 330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))// 400

// ---------------------------------------------------------17
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

// Change code below this line
for(const color of colors){
hexColors.push(color.hex);
rgbColors.push(color.rgb);}

console.log(hexColors);// [ '#f44336', '#2196f3', '#4caf50', '#ffeb3b' ]
console.log(rgbColors);// [ '244,67,54', '33,150,243', '76,175,80', '255,235,59' ]

// ---------------------------------------------------------18
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  let prodPrice  // Change code below this line
  for (const product of products) {
    if (product.name === productName) {
      return prodPrice = product.price
    };
  } return null
}

console.log(getProductPrice("Radar"))// 1300
console.log(getProductPrice("Grip"))// 1200
console.log(getProductPrice("Scanner"))// 2700
console.log(getProductPrice("Droid"))// 400
console.log(getProductPrice("Engine"))// null

// ---------------------------------------------------------19
// ---------------------------------------------------------20
// ---------------------------------------------------------21
// ---------------------------------------------------------22
// ---------------------------------------------------------23
// ---------------------------------------------------------24
// ---------------------------------------------------------25
// ---------------------------------------------------------26
// ---------------------------------------------------------27
// ---------------------------------------------------------28
// ---------------------------------------------------------29
// ---------------------------------------------------------30
// ---------------------------------------------------------32
// ---------------------------------------------------------33
// ---------------------------------------------------------34
// ---------------------------------------------------------35
// ---------------------------------------------------------36
// ---------------------------------------------------------37
// ---------------------------------------------------------38
// ---------------------------------------------------------39
// ---------------------------------------------------------40
// ---------------------------------------------------------41







function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;

  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){ // If strSplit[i].length больше, чем сравнимое слово...
	longestWord = strSplit[i].length; // ...затем longestWord принимает новое значение
     }
  }
  /* Здесь strSplit.length = 9
     Для каждой итерации: i = ?   i < strSplit.length?   i++  if(strSplit[i].length > longestWord)?   longestWord = strSplit[i].length
     1 итерация:        0             yes             1   if("The".length > 0)? => if(3 > 0)?     longestWord = 3
     2 итерация:        1             yes             2   if("quick".length > 3)? => if(5 > 3)?   longestWord = 5   
     3 итерация:        2             yes             3   if("brown".length > 5)? => if(5 > 5)?   longestWord = 5   
     4 итерация:        3             yes             4   if("fox".length > 5)? => if(3 > 5)?     longestWord = 5  
     5 итерация:        4             yes             5   if("jumped".length > 5)? => if(6 > 5)?  longestWord = 6 
     6 итерация:        5             yes             6   if("over".length > 6)? => if(4 > 6)?    longestWord = 6 
     7 итерация:        6             yes             7   if("the".length > 6)? => if(3 > 6)?     longestWord = 6
     8 итерация:        7             yes             8   if("lazy".length > 6)? => if(4 > 6)?    longestWord = 6 
     9 итерация:        8             yes             9   if("dog".length > 6)? => if(3 > 6)?     longestWord = 6 
     10 итерация:       9             no               
     Конец цикла FOR */

  //Этап 4. Возвращаем самое длинное слово
  return longestWord; // 6
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
// ---------------------------------------------------------1
