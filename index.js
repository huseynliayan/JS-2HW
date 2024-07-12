//Task 1
// let age = prompt("Enter your age");
// if (age >= 0 && age <= 2) {
//   alert("You are a baby");
// } else if (age >= 12 && age <= 18) {
//   alert("You are a teenager");
// } else if (age >= 19 && age <= 60) {
//   alert("You are an adult");
// } else if (age >= 61) {
//   alert("You are a senior");
// } else {
//   alert("Invalid age");
// }

//Task 2
// let number = +prompt("Enter a number between 0 and 9");
// switch(number){
//     case 0:
//         alert(")");
//         break:
//     case 1:
//         alert("!");
//         break;
//     case 2:
//         alert("@");
//         break;
//     case 3:
//         alert("#");
//         break;
//     case 4:
//         alert("$");
//         break;
//     case 5:
//         alert("%");
//         break;
//     case 6:
//         alert("^");
//         break;
//     case 7:
//         alert("&");
//         break;
//     case 8:
//         alert("*");
//         break;
//     case 9:
//         alert("(");
//         break;
//     default:
//         alert("Invalid number!");
//         break;
// }

//Task 3
// let number = prompt("Input the number");
// let digit1 = Math.floor(number / 100);
// let digit2 = Math.floor(number % 100) / 10;
// let digit3 = number % 10;

// if (number >= 100 && number <= 999) {
//   if (digit1 == digit2 || digit1 == digit3 || digit2 == digit3) {
//     alert("The are identical digits");
//   }
//   else{
//     alert("The aren't identical digits");
//   }
// }
// else{
//     alert("Invalid number! The number must be three digits");
// }

//Task 4

// let year = prompt("Input current year");
// if((year % 400 == 0 ) || (year % 4 == 0 && year % 100 != 0))
// {
//     alert(year + " Leap year");
// } else{
//     alert(year + " not a leap year");
// }

//Task 5

// let number = prompt("Input the number");
// if(number >= 10000 && number < 100000){
//     digit1 = Math.floor(number /10000);
//     digit2 = Math.floor(number /1000) % 10;
//     digit4 = Math.floor(number / 10) % 10;
//     digit5 = number % 10;
//     if(digit1 == digit5 && digit2 == digit4){
//         alert(number + " is a palindrome");
//     }else{
//         alert(number + " is not a palindrome");
//     }
// }else{
//     alert("Invalid number!");
// }

//Task 6
// let amountUsd = prompt("Enter the amount of US dollars (USD):");
// let currency = prompt("Enter the currency (EUR, UAN or AZN):");
// const exchangeEuro = 0.92;
// const exchangeUan = 40.84;
// const exchangeAzn = 1.7;

// let convertedAmount;

// switch (currency) {
//   case "EUR":
//     alert((convertedAmount = amountUsd * exchangeEuro));
//     break;
//   case "UAN":
//     alert((convertedAmount = amountUsd * exchangeUan));
//     break;
//   case "AZN":
//     alert((convertedAmount = amountUsd * exchangeAzn));
//     break;
//   default:
//     alert("Invalid currency. Please enter EUR, UAN or AZN.");
//     break;
// }

//Task 7
// let amountMoney = prompt("Enter the purchase amount");
// let discountPrice;
// if(amountMoney >= 200 && amountMoney < 300){
//     alert(discountPrice = (amountMoney * 97) / 100);
// } else if(amountMoney >= 300 && amountMoney < 500){
//    alert( discountPrice = (amountMoney * 95) / 100);
// }else if(amountMoney >= 500){
//     alert(discountPrice = (amountMoney * 93) / 100);
// } else{
//     alert("Incorrect!");
// }

//Task 8
// let circumference = prompt("Введите длину окружности:");
// let perimeter = prompt("Введите периметр квадрата:");

// let diameter = circumference / 3.14;
// let side = perimeter / 4;

// if (diameter <= side) {
//     alert("Окружность может поместиться в квадрат.");
// } else {
//     alert("Окружность не может поместиться в квадрат.");
// }

//Task 9
// let score = 0;

// let answer1 = prompt("Question 1: What is the capital of Azerbaijan?\n1. Baku\n2. London\n3. Rome");
// if (answer1 === "1") {
//     score += 2;
// }

// let answer2 = prompt("Question 2: What is 2 ** 5?\n1. 16\n2. 4\n3. 32");
// if (answer2 === "3") {
//     score += 2;
// }

// let answer3 = prompt("Question 3: Who wrote 'War and Peace'?\n1. Fyodor Dostoevsky\n2. Leo Tolstoy\n3. Alexander Pushkin");

// if (answer3 === "2") {
//     score += 2;
// }

// alert("You scored " + score + " points.");

//Task 10
let day = prompt("Enter the day");
let month = prompt("Enter the month");
let year = prompt("Enter the year");
let daysInMonth;

if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12
) {
  daysInMonth = 31;
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  daysInMonth = 30;
} else {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInMonth = 29;
  } else {
    daysInMonth = 28;
  }
}

day++;
if (day > daysInMonth) {
  day = 1;
  month++;
}

if (month > 12) {
  month = 1;
  year++;
}
alert("The next date is: " + day + "/" + month + "/" + year);
