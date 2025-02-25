//Question#01
// var firstName = 'Syed'
// var lastName = 'Mubashir'
// var fullName = firstName +' '+ lastName;

// document.write('Hello' +' '+ fullName +'!');

//Question#02

// var favrtmobile = prompt("Enter your Favorite Mobile Phone:")
// document.write(`My Favorite Mobile Phone is: ${favrtmobile} <br>
//             Length of string: ${favrtmobile.length}` )

//Question#03
// var str = "Pakistani"
// document.write(`String: ${str} <br>
//         Index of "n": ${str.indexOf("n")}`)

//Question#04
// var str = "Hello World"
// document.write(`String: ${str} <br>
//         Index of "l": ${str.indexOf("n")}`)

//Question#05
// var str = "Pakistani"
// document.write(`String: ${str} <br>
//         Character at index 3: ${str.charAt(3)}`)

//Question#06
// var firstName = 'Syed'
// var lastName = 'Mubashir'
// // var fullName = firstName +' '+ lastName;

// document.write(`Hello ${firstName.concat(lastName)}`);

//Question#07
// var str = "Hyderabad"
// document.write(`City: ${str} <br>
//         After Replacment: ${str.replace("Hyder","Islam")}`);

//Question#08
// var str = "Ali and Sami are best friends. They play cricket and football together."
// document.write(`Message: ${str} <br>
//         After Replacment: ${str.replaceAll("and","&")}`);

//Question#09
// var num = '472';
// document.write(`Value: ${num}<br> Type: ${typeof(num)} <br>
//             Value: ${num}<br> Type: ${typeof(Number(num))}`);

//Question#10

//nhi smjh aa rha

//Question#11
// var str = prompt("Enter any word in smallcase")
// document.write(`User Input: ${str} <br>
//         Uppercase: ${str.toUpperCase(str)}`);

//Question#12
// var str = prompt("Enter any word in uppercase")
// document.write(`User Input: ${str} <br>
//         Lowercase: ${str.toLowerCase(str)}`);


//Question#13
// let userInput = prompt("Enter text:");  

// let titleCaseText = userInput
//     .split(" ")  
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  
//     .join(" ");  

// console.log("User input:", userInput);  
// console.log("Title case:", titleCaseText);  
// alert("Title case: " + titleCaseText);


//Question#14
// var num = 35.36;  
// var result = num.toString().replace(".", "");  

// document.write("Number: " + num + "<br>");  
// document.write("Result: " + result);  


//Question#15
// var a = "3";
// var b = "3";

// var x = a.concat(b); // Strings concat() method

// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("a + b is " + x);


//Question#16
// var a = "3";
// var b = "3";

// var y = a.trim() - b.trim(); // trim() string method

// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("a - b is " + y);


//Question#17
// var username = prompt("Apna username enter karein:");  

// // Agar username me koi special character ho to error show karega
// if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {  
//     alert("Ghalat username! Bara-e-karam aisa username enter karein jisme @, ., , ya ! na ho.");  
// } else {  
//     document.write("Aapka username hai: " + username);  
// }


//Question#18
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Enter item to search:");  

// // User input ko lowercase me convert karein
// userInput = userInput.toLowerCase();

// // Array ko bhi lowercase me convert karein aur search karein
// var found = A.map(item => item.toLowerCase()).includes(userInput);

// if (found) {  
//     alert(userInput + " is available in the list.");  
// } else {  
//     alert(userInput + " is not available in the list.");  
// }


//Question#19
// let string1 = prompt("Enter first string:");
// let string2 = prompt("Enter second string:");

// if (string1.localeCompare(string2) > 0) {
//     console.log(`${string1} is greater than ${string2}`);
// } else if (string1.localeCompare(string2) < 0) {
//     console.log(`${string2} is greater than ${string1}`);
// } else {
//     console.log(`${string1} and ${string2} are equal`);
// }


//Question#20
// let password = prompt("Enter your password:");

// if (password.length < 6) {
//     console.log("Password must be at least 6 characters long.");
// } else if (!isNaN(password[0])) {
//     console.log("Password should not start with a number.");
// } else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
//     console.log("Password must contain both alphabets and numbers.");
// } else {
//     console.log("Password is valid.");
// }


//Question#21
// var university = "University of Karachi";

// // Convert string to array using split method
// var universityArray = university.split(" ");

// // Display the elements of the array in the browser
// console.log(universityArray);

// // To display the array elements in the browser window
// document.write(universityArray.join("<br>"));


//Question#22
// let userInput = prompt("Enter a string:");

// if (userInput.length > 0) {
//     // Get the last character of the string
//     let lastCharacter = userInput.charAt(userInput.length - 1);
//     console.log("The last character is: " + lastCharacter);
// } else {
//     console.log("Please enter a valid string.");
// }


//Question#23
// let sentence = "The quick brown fox jumps over the lazy dog";

// // Convert the sentence to lowercase for case-insensitive comparison
// let lowerCaseSentence = sentence.toLowerCase();

// // Use the split method to break the sentence into an array of words
// let wordsArray = lowerCaseSentence.split(" ");

// // Use the filter method to count the occurrences of the word "the"
// let count = wordsArray.filter(word => word === "the").length;

// console.log("The word 'the' occurs " + count + " times.");


//Question#24
// var str = "Pakistan";

// // Convert the string to lowercase to make the search case-insensitive
// var lowerStr = str.toLowerCase();

// // Define vowels
// var vowels = "aeiou";

// // Count vowels
// var vowelCount = lowerStr.split("").filter(char => vowels.includes(char)).length;

// // Count consonants by checking for alphabetic characters that are not vowels
// var consonantCount = lowerStr.split("").filter(char => /[a-z]/.test(char) && !vowels.includes(char)).length;

// console.log("Vowels: " + vowelCount);
// console.log("Consonants: " + consonantCount);