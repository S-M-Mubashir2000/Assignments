// // Question#01
// var studentNames = [];

// // Question#02
// var studentNames = new Array();

// // Question#03
// var stringsArray = ["computer","mobile","tablet","laptop"];

// // Question#04
// var numbersArray = [50000,15000,1.786,0.975];

// // Question#05
// var booleanArray = [true,false];

// // Question#06
// var mixedArray = ["computer","mobile","tablet","laptop",50000,15000,1.786,0.975,true,false];

// // Question#07
// var networksPAK = ["Jazz","Ufone","Zong","Telenor"];

// // Question#08
// var eduqualif = ["SSC","HSC","BCS","BS","B.COM","MS","M.Phil","PHD"];

// document.write(
//     `<h2>Qualifications</h2> <br>
//     <ul>
//         <li>${eduqualif[0]}</li>
//         <li>${eduqualif[1]}</li>
//         <li>${eduqualif[2]}</li>
//         <li>${eduqualif[3]}</li>
//         <li>${eduqualif[4]}</li>
//         <li>${eduqualif[5]}</li>
//         <li>${eduqualif[6]}</li>
//         <li>${eduqualif[7]}</li>  
//     </ul>`
// );

// // Question#09
// var topMovies = [];

// topMovies.push("kick");
// topMovies.unshift("kick2")

// document.write(
//     `
//     <h1>Top Movies Of 2025</h1>
//     <ul>
//         <li>${topMovies[0]}</li>
//         <li>${topMovies[1]}</li>
//     </ul>
//     <br>
//     <h1>Length Of the Array:${topMovies.length}</h1>`
// );

// // Question#10

// var favrtCars = ["Rolls Royce","Dodge Charger","Cadillac","Cheverlot","GTR"];

// document.write(`<h1>Favourite Cars</h1>
//     <br>
//     ${favrtCars}<br>
//     <p>First Index of the array: ${favrtCars.indexOf("Rolls Royce")}</p>
//     <p>Car at First Index of the array: ${favrtCars[0]}</p>
//     <p>Last Index of the array: ${favrtCars.lastIndexOf("GTR")}</p>
//     <p>Car at Last Index of the array: ${favrtCars[4]}</p>
//     `);

// //Question#11

// var stuNames = ["Mubashir","Hussain","Muawiyah"];
// var scores = [400,430,480];
// var totalMarks = 500;

// document.write(`<h3>Score of ${stuNames[0]} is ${scores[0]}. Percentage: ${scores[0] * 100 / totalMarks}%.</h3>
//                 <h3>Score of ${stuNames[1]} is ${scores[1]}. Percentage: ${scores[1] * 100 / totalMarks}%.</h3>
//                 <h3>Score of ${stuNames[2]} is ${scores[02]}. Percentage: ${scores[2] * 100 / totalMarks}%.</h3>
//             `);

// //Question#12
// var colors = ["Black","Blue","White","Green","Purple","Brown"];
// document.write(colors);

// //Question#12(a)
// var colors = ["Black","Blue","White","Green","Purple","Brown"];
// var userchoice = prompt("Choose color to show in the beginning:")

// colors.unshift(userchoice);

// document.write(`${colors}`)

// //Question#12(b)
// var colors = ["Black","Blue","White","Green","Purple","Brown"];
// var userchoice = prompt("Choose color to show at the end:")

// colors.push(userchoice);

// document.write(`${colors}`)

//Question#12(c)
// var colors = ["Black","Blue","White","Green","Purple","Brown"];
// var userchoice1 = prompt("Choose color 1 to show in the beginning:")
// var userchoice2 = prompt("Choose color 2 to show in the beginning:")

// colors.unshift(userchoice1);
// colors.unshift(userchoice2);

// document.write(`${colors}`)

//Question#12(d)
// var colors = ["Black","Blue","White","Green","Purple","Brown"];
// var userchoice = prompt("Choose color to delete from the beginning:")

// colors.shift(userchoice);

// document.write(`${colors}`)

//Question#12(e)
// var colors = ["Black","Blue","White","Green","Purple","Brown"];
// var userchoice = prompt("Choose color to delete from the end:")

// colors.pop(userchoice);

// document.write(`${colors}`)

//Question#12(f)
// var colors = ["Black","Blue","White","Green","Purple","Brown"];
// var indexNum = prompt("Index at which you want to add color:");
// var colorname = prompt(`Color you want to add on ${indexNum}:`);

// colors.splice(indexNum,0,colorname);

// document.write(`${colors}`)

// Question#12(g)
// var colors = ["Black","Blue","White","Green","Purple","Brown"];
// var deletefrom = prompt("Index at which you want to start delete:");
// var colornums = prompt(`No. of colors you want delete:`)

// colors.splice(deletefrom,colornums);

// document.write(`${colors}`);


// Question#13
//Samajh Nhi Aaya


// Question#14
// var fruits = ["Apple","Grapes","Guava","Cherry","Strawberry"];
// fruits.sort()
// document.write(fruits)


// Question#15
// var citites = ["Karachi","Lahore","Islamabad","Peshawar","Quetta"];
// var selectedcities = citites.slice(0,3);

// document.write(selectedcities);


//Question#16
// var arr = ["This","is","my","dog"];
// var joinarr = arr.join(" ");

// document.write(joinarr);


//Question#17

        // Create an empty array to act as a FIFO queue
        // let fifoQueue = [];

        // // Add values to the array one by one using push() method
        // fifoQueue.push("Apple");
        // fifoQueue.push("Banana");
        // fifoQueue.push("Cherry");

        // // Display the current queue
        // document.write("Current FIFO Queue: " + fifoQueue.join(", ") + "<br>");

        // // Access and remove values in the FIFO order using shift() method
        // let firstOut = fifoQueue.shift(); // Removes "Apple" (first element)
        // let secondOut = fifoQueue.shift(); // Removes "Banana" (next element)

        // // Display the removed values
        // document.write("First removed value: " + firstOut + "<br>");
        // document.write("Second removed value: " + secondOut + "<br>");

        // // Display the remaining queue
        // document.write("Remaining FIFO Queue: " + fifoQueue.join(", ") + "<br>");


//Question#18
// Create an empty array to act as a LIFO stack
// let lifoStack = [];

// Add values to the array one by one using push() method
// lifoStack.push("Apple");
// lifoStack.push("Banana");
// lifoStack.push("Cherry");

// // Display the current stack
// document.write("Current LIFO Stack: " + lifoStack.join(", ") + "<br>");

// Access and remove values in the LIFO order using pop() method
// let lastOut = lifoStack.pop(); // Removes "Cherry" (last element)
// let secondLastOut = lifoStack.pop(); // Removes "Banana" (next last element)

// // Display the removed values
// document.write("First removed value (Last In): " + lastOut + "<br>");
// document.write("Second removed value: " + secondLastOut + "<br>");

// // Display the remaining stack
// document.write("Remaining LIFO Stack: " + lifoStack.join(", ") + "<br>");


//Question#19
// Declare and initialize the array of phone manufacturers
// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Create a dropdown (select) menu and populate it with options from the array
// document.write('<select>'); // Start the select tag
//     document.write('<option value="">Select a Phone Manufacturer</option>'); // Default option

//     // Loop through the array and create an option for each manufacturer
//     for (let i = 0; i < phoneManufacturers.length; i++) { document.write('<option
//         value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>');
//         }

//         document.write('</select>'); // Close the select tag


//Question#20
  // Declare and initialize an empty multidimensional array
  // let multiArray = [];

  // // Adding arrays to the multidimensional array
  // multiArray[0] = ["Apple", "Banana", "Cherry"]; // First sub-array
  // multiArray[1] = [10, 20, 30]; // Second sub-array
  // multiArray[2] = ["Red", "Blue", "Green"]; // Third sub-array

  // // Display the multidimensional array
  // document.write("Multidimensional Array: <br>");
  // document.write(JSON.stringify(multiArray)); // Displaying the array as a string


//Question#21
// Declare and initialize a multidimensional array representing the matrix
// let matrix = [
//     [1, 2, 3], // First row
//     [4, 5, 6], // Second row
//     [7, 8, 9] // Third row
//     ];

//     // Display the matrix in the browser
//     document.write("Matrix: <br>");
//     document.write(JSON.stringify(matrix)); // Displaying the matrix as a string
