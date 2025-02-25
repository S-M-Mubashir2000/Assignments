// //Question#01
// for(var i = 1; i <= 5; i++){
//     document.write("Hello world <br>")
// };

// //Question#02
// for(var i = 1; i <= 10; i++){
//     document.write(`${i} <br>`)
// };

// //Question#03
// var tablenum = +(prompt("Enter A Number for it's Multiplication"));
// var lastnum = +(prompt("Enter A limit for it's Multiplication Table"));
// for(var i = 1; i <= lastnum; i++){
//     document.write(`${tablenum} X ${i} = ${tablenum * i} <br>`)
// };

//Question#04
// var mobiles = ["Nokia","Blackberry","Sony Erosin","Samsung"]
// for(var i = 0; i < mobiles.length; i++){
//     document.write(`${mobiles[i]} <br>`)
// };

//Question#05
// var fruits = ["Apple","Banana","Orange","Pineapple"]
// for(var i = 0; i < fruits.length; i++){
//     document.write(`${fruits[i]} <br>
        
//         `)
// };
// for(var i = 0; i < fruits.length; i++){
//     document.write(`
//         <h3>Element at index ${i} is ${fruits[i]}</h3>
//         `)
// };

//Question#06
// var itemnums = +(prompt("Enter number of items."))
// var items = [];
// for(var i = 0; i < itemnums; i++){
//     var item = prompt(`Enter value for index ${i}:`)
//     items.push(item)
// };
// document.write(`<h1>No. of items Entered: ${itemnums}</h1> 
//     <h2>Items:</h2>`)
// for(var i = 0; i < items.length;i++){
//     document.write(`${items[i]} <br>`)
// }


//Question#07
//  // a. Counting
//  console.log("Counting:");
//  for (let i = 1; i <= 15; i++) { process.stdout.write(i + (i < 15 ? ", " : "\n" )); } //
//      b. Reverse Counting console.log("Reverse counting:"); for (let i=10; i>= 1; i--) {
//      process.stdout.write(i + (i > 1 ? ", " : "\n"));
//      }

//      // c. Even
//      console.log("Even:");
//      for (let i = 0; i <= 20; i +=2) { process.stdout.write(i + (i < 20 ? ", " : "\n" ));
//          } // d. Odd console.log("Odd:"); for (let i=1; i <=19; i +=2) {
//          process.stdout.write(i + (i < 19 ? ", " : "\n" )); } // e. Series
//          console.log("Series:"); for (let i=2; i <=20; i +=2) { process.stdout.write(i
//          + "k" + (i < 20 ? ", " : "\n" )); }


// //Question#08
// // Given array
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt the user to enter an item to search for
// let searchItem = prompt("Enter an item to search in the list:");

// // Check if the item is in the array
// if (A.includes(searchItem.toLowerCase())) {
// alert(${searchItem} is found in the list.);
// } else {
// alert(${searchItem} is not found in the list.);
// }


// //Question#09
// // Given array
// let A = [24, 53, 78, 91, 12];

// // Using Math.max to find the largest number
// let largestNumber = Math.max(...A);

// // Display the largest number
// console.log("The largest number in the array is:", largestNumber);


// //Question#10
//   // Given array
//   let A = [24, 53, 78, 91, 12];

//   // Using Math.min to find the smallest number
//   let smallestNumber = Math.min(...A);

//   // Display the smallest number
//   console.log("The smallest number in the array is:", smallestNumber);


// //Question#11
//  // Given array
//  let A = [24, 53, 78, 91, 12];

//  // Finding the largest number using Math.max
//  let largestNumber = Math.max(...A);

//  // Finding the smallest number using Math.min
//  let smallestNumber = Math.min(...A);

//  // Displaying the results
//  console.log("The largest number in the array is:", largestNumber);
//  console.log("The smallest number in the array is:", smallestNumber);


// //Question#12
// // Loop to print multiples of 5 from 1 to 100
// for (let i = 5; i <= 100; i +=5) { console.log(i); }


// //Question#13
//  // Given arrays
//  var students = ["Ali", "Sami", "Taha", "Inam"];
//  var scores = [58, 73, 89, 90];

//  // Creating the table structure
//  let table = "<table border='1'>
//      <tr>
//          <th>Student Name</th>
//          <th>Score</th>
//      </tr>";

//      // Loop through the arrays to generate table rows
//      for (let i = 0; i < students.length; i++) { table +=`<tr>
//          <td>${students[i]}</td>
//          <td>${scores[i]}</td>
//          </tr>`;
//          }

//          // Close the table
//          table += "
//  </table>";

//  // Display the table in the browser
//  document.body.innerHTML = table;


// //Question#14
//  // Given array
//  var scores = [12, 45, 3, 22, 34, 50];

//  // Prompt user for the stop value
//  let stopValue = prompt("Enter the stop value:");

//  let result = [];

//  // Loop through the array and collect numbers until the stop value is found
//  for (let i = 0; i < scores.length; i++) { result.push(scores[i]); // Add the
//      current element to the result array if (scores[i]==stopValue) { break;
//      // Stop the loop once the stop value is found } } // Print the result as
//      a comma-separated string console.log(result.join(", "));


// //Question#15
//  // Given 2D array
//  let A = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//    ];

//     // Nested loops to go through each element and print it
//    for (let i = 0; i < A.length; i++) {
//    for (let j = 0; j < A[i].length; j++) {
//    console.log(A[i][j]);
//    }
//    }


//Question#16
 // Prompt the user to input the starting value of num
//  let num = parseFloat(prompt(" Enter a starting value for num:")); // Loop to decrease the value by 0.5 as long as it's
//  positive while (num> 0) {
//  console.log(num);
//  num -= 0.5; // Decrease the value of num by 0.5
//  }


//Question#17
// For loop to iterate from 0 to 20
// for (let i = 0; i <= 20; i++) { if (i % 2===0) { console.log(i
//     + " is even" ); } else { console.log(i + " is odd" ); } } 


//Question#18
 // Initialize product variable
//  let product = 1;

//  // Loop through the numbers from 1 to 7
//  for (let i = 1; i <= 7; i++) { // Check if the number is odd if (i %
//      2 !==0) { product *=i; // Multiply the product by the odd number
//      } } 


//Question#19
// for(var i = 10; i > 0; i--){
//     for(var j = 0; j < i; j++){
//         document.write(`*`)
//     }
//     document.write(`<br>`)
// };

// // Question#20(a)
// for(var i = 1; i < 7; i++){
//     for(var j = 0; j < i; j++){
//         document.write(`*`)
//     }
//     document.write(`<br>`)
// };

// // Question#20(b)
// for(var i = 7; i > 0; i--){
//     for(var j = 0; j < i; j++){
//         document.write(`*`)
//     }
//     document.write(`<br>`)
// };

// // Question#20(c)
// for(var i = 0; i < 7; i++){
//     for(var j = 0; j < 7; j++){
//         document.write(`*`)
//     }
//     document.write(`<br>`)
// };