let num = parseInt(prompt("Enter a number:"));

while (num > 0) {
    let digit = num % 10;         // Get the last digit
    console.log(digit);           // Print the digit
    num = Math.floor(num / 10);   // Remove the last digit
}
