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

consol.log(checkAge(20))
consol.log(checkAge(8))
consol.log(checkAge(14))
consol.log(checkAge(38))


