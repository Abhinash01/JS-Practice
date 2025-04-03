let num = parseInt(prompt("Enter a number:")); // Get user input
let sum = 0;

while (num > 0) {
    let digit = num % 10; // Extract the last digit
    sum += digit; // Add the digit to sum
    num = Math.floor(num / 10); // Remove the last digit
}

console.log("Sum of digits:", sum);