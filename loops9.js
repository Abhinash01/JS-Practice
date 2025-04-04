let a = parseInt(prompt("Enter the first number:"));
let b = parseInt(prompt("Enter the second number:"));

// Function to find GCD using the Euclidean algorithm
function findGCD(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

// Calculate LCM using the formula: LCM(a, b) = (a * b) / GCD(a, b)
let gcd = findGCD(a, b);
let lcm = (a * b) / gcd;

console.log("LCM of", a, "and", b, "is:", lcm);
