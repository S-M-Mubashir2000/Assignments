// Question#01
// var usernum = +(prompt("Enter any number which is divisible by 3"));

// if(usernum % 3 == 0){
//     document.write(`${usernum} is divisible by 3.`)
// }
// else{
//     document.write(`${usernum} is not divisible by 3.`)
// }

                               /******************* THE END **********************/

//Question#02
// var usernum = +(prompt("Enter any Number:"));

// if(usernum % 2 == 1){
//     document.write(`${usernum} is odd number.`)
// }
// else{
//     document.write(`${usernum} is even number.`)
// }

                               /******************* THE END **********************/

//Question#03
// var usernum = +(prompt("Enter Your Age:"));

// if(usernum > 18){
//     document.write(`Old Enough.`)
// }
// else{
//     document.write(`Too Young.`)
// }

                               /******************* THE END **********************/

//Question#04
// var username = prompt("Enter Name:");

// if(username === "Mubashir"){
//     document.write(`Assalam u Alaikum ${username}`)
// }

                               /******************* THE END **********************/

//Question#05
// var usernum = +(prompt("Enter any number which is divisible by 3"));

// switch (usernum % 3) {
//     case 0:
//         document.write(`${usernum} is divisible by 3`);
//         break;
//     default:
//         document.write(`${usernum} is not divisible by 3`);
//         break;
// }

                               /******************* THE END **********************/

//Question#06
// var input = 'A';

// if (!isNaN(input)) {
//     console.log("The input is a number.");
// }
// else if (input >= 'A' && input <= 'Z') {
//     console.log("The input is an uppercase letter.");
// }
// else if (input >= 'a' && input <= 'z') {
//     console.log("The input is a lowercase letter.");
// }
// else {
//     console.log("The input is neither a number nor a letter.");
// }

                               /******************* THE END **********************/

//Question#07
// var number1 = +(prompt("Enter first number:"));
// var number2 = +(prompt("Enter second number:"));
// var operator = prompt("Enter an operator (+, -, *, /, %):");

// switch (operator) {
//     case '+':
//         document.write(`Result: ${number1 + number2}`);
//         break;
//     case '-':
//         document.write(`Result: ${number1 - number2}`);
//         break;
//     case '*':
//         document.write(`Result: ${number1 * number2}`);
//         break;
//     case '/':
//             document.write(`Result: ${number1 / number2}`);
//         break;
//     case '%':
//             document.write(`Result: ${number1 % number2}`);
//         break;
//     default:
//         document.write("Error: Invalid operator.");
//         break;
//     };

                               /******************* THE END **********************/

//Question#08
// var usertime = +(prompt("Enter time:"))

// if(usertime >= 0000 && usertime < 1200){
//     document.write(`Good Morning`)
// }
// else if(usertime >= 1200 && usertime < 1700){
//     document.write(`Good Afternoon`)
// }
// else if(usertime >= 1700 && usertime < 2100){
//     document.write(`Good Evening`)
// }
// else if(usertime >= 2100 && usertime < 2359){
//     document.write(`Good Night`)
// }
// else{
//     document.write(`Galat Time Hai.`)
// }

                               /******************* THE END **********************/

//Question#09
// var year = +(prompt("Enter a year in YYYY format:"));

// {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         document.write(`${year} is a leap year.`);
//     } else {
//         document.write(`${year} is not a leap year.`);
//     }
// }

                               /******************* THE END **********************/

//Question#10
// var correctPassword = "sahi password";
// var userPassword = prompt("Enter your password:");

// if (!userPassword) {
//     document.write("Please enter your password");
// } else if (userPassword === correctPassword) {
//     document.write("Correct! The password you entered matches the original password");
// } else {
//     document.write("Incorrect password");
// }

                               /******************* THE END **********************/

//Question#11
// var firstName = "Ali";

// if (firstName === "Fahad") {
// document.write("Hello Fahad!");
// }
// else{
//     document.write("You are not Fahad")
// }

                               /******************* THE END **********************/

//Question#12
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

                               /******************* THE END **********************/

//Question#13
// var num1 = +(prompt("Enter the first integer:"));
// var num2 = +(prompt("Enter the second integer:"));
    
// if(num1 > num2){
//     document.write(`The larger number is: ${num1}`);
// } 
// else if(num2 > num1){
//     document.write(`The larger number is: ${num2}`);
//     } 
// else{
//         document.write("Both numbers are equal.");
// }

                               /******************* THE END **********************/

//Question#14
// var num = +(prompt("Enter a number:"));
    
// if(num > 0){
//     document.write("The number is positive.");
// }
// else if(num < 0){
//     document.write("The number is negative.");
// }
// else{
//     document.write("The number is zero.");
// }

                               /******************* THE END **********************/

//Question#15
// var userhour = +(prompt("What the current hour is:"))

// if(userhour == 6 && userhour < 9){
//     document.write(`Breakfast is Served.`)
// }
// else if(userhour == 11 && userhour < 13){
//     document.write(`Time for Lunch.`)
// }
// else if(userhour == 17 && userhour < 20){
//     document.write(`It's Dinner Time.`)
// }
// else{
//     document.write(`Sorry, you'll have to wait, or go get a snack.`)
// }

                               /******************* THE END **********************/

//Question#16
// var value = true;  

// var typeOfValue = typeof value;

// if (typeOfValue === "number") {
//     document.write("The type of the variable is a number.");
// } else if (typeOfValue === "string") {
//     document.write("The type of the variable is a string.");
// } else if (typeOfValue === "boolean") {
//     document.write("The type of the variable is a boolean.");
// } else if (typeOfValue === "undefined") {
//     document.write("The type of the variable is undefined.");
// } else {
//     document.write("Unknown type.");
// }

                               /******************* THE END **********************/

//Question#17
// var usercharacter = prompt("Enter any one vowel:");

// if(usercharacter == "a" || usercharacter == "e" || usercharacter == "i" || usercharacter == "o" || usercharacter == "u"){
//     document.write(`Yes it's a vowel.`)
// }
// else{
//     document.write(`No it's not a vowel.`)
// }

                               /******************* THE END **********************/

//Question#18
// var num1 = 10;
// var num2 = 8;

// if(num1 !== num2){
//     document.write(`true`)
// }
// else{
//     document.write(`false`)
// }

                               /******************* THE END **********************/

//Question#19
// var month = +(prompt("Enter The Month Number:"));
// switch (month) {
//   case 1:
//     alert("January");
//     break;
//   case 2:
//     alert("February");
//     break;
//   case 3:
//     alert("March");
//     break;
//   case 4:
//     alert("April");
//     break;
//   case 5:
//     alert("May");
//     break;
//   case 6:
//     alert("June");
//     break;
//   case 7:
//     alert("July");
//     break;
//   case 8:
//     alert("August");
//     break;
//   case 9:
//     alert("September");
//     break;
//   case 10:
//     alert("October");
//     break;
//   case 11:
//     alert("November");
//     break;
//   case 12:
//     alert("December");
//     break;
  
//   default:
//     console.log(`Invalid Month`);
// }

                               /******************* THE END **********************/

//Question#20
// var age = 16;

// var voteable = (age < 18) ? "Too young" : "Old enough"

// document.write(`${voteable}`)

                                /******************* THE END **********************/