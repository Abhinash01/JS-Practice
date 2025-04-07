let number = 234;
let product = 1;

while (number > 0) {
  let digit = number % 10;
  product *= digit;
  number = Math.floor(number / 10);
}

console.log("Product of digits:", product);
