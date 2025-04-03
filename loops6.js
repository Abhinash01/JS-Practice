let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));

// Ensure a >= b for simplicity
if (a < b) {
    [a, b] = [b, a]; // Swap values
}

while (b !== 0) {
    let temp = b;
    b = a % b; // Remainder becomes new 'b'
    a = temp;  // Old 'b' becomes new 'a'
}

console.log("GCD is:", a);
