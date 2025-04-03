let num = parseInt(prompt("Enter a number:")); // Get input and convert to number
let reversed = 0;

while (num > 0) {
    let digit = num % 10; // Extract the last digit
    reversed = reversed * 10 + digit; // Append the digit to reversed number
    num = Math.floor(num / 10); // Remove the last digit
}

console.log("Reversed number:", reversed);