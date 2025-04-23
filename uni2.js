for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  


//   FizzBuzz Lite
// Loop from 1 to 30.
// If the number is divisible by 3, print "Fizz".
// If divisible by 5, print "Buzz".
// If divisible by both, print "FizzBuzz".
// Else, print the number.