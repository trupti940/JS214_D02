//Mapping
function doubleNumbers() {
    // Prompt user for input
    let input = prompt("Enter a list of numbers separated by spaces:");
    if (!input) return; // Handle empty input
    
    // Convert input to array of numbers
    let numbers = input.split(' ').map(Number);
    
    // Double each number using map
    let doubled = numbers.map(num => num * 2);
    
    // Display the result
    alert("Doubled numbers: " + doubled.join(' '));
}

// Call the function to test
doubleNumbers();

//Filtering Data
function filterEvenNumbers() {
    // Prompt user for input
    let input = prompt("Enter a list of integers separated by commas:");
    if (!input) return; // Handle empty input
    
    // Convert input to array of numbers
    let numbers = input.split(',').map(Number);
    
    // Filter even numbers using filter
    let evens = numbers.filter(num => num % 2 === 0);
    
    // Display the result
    alert("Even numbers: " + evens.join(', '));
}

// Call the function to test
filterEvenNumbers();


// Reducing Arrays
function sumNumbers() {
    // Prompt user for input
    let input = prompt("Enter a series of numbers separated by semicolons:");
    if (!input) return; // Handle empty input
    
    // Convert input to array of numbers
    let numbers = input.split(';').map(Number);
    
    // Calculate sum using reduce
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    
    // Display the result
    alert("Sum of numbers: " + sum);
}

// Call the function to test
sumNumbers();
