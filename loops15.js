let number = 452;
let digits = [];

// Extract digits in reverse order
while (number > 0) {
  let digit = number % 10;
  digits.push(digit);
  number = Math.floor(number / 10);
}

// Reverse the array to get original order
digits.reverse();

// Print digits
for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}
