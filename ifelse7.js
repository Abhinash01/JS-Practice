//Find the Largest of Three Numbers
let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let c = prompt("Enter third number: "); 
if(a > b && a > c) {
  console.log("The largest number is a: " + a);
}
else if(b > a && b > c) {
  console.log("The largest number is b: " + b);
}
else if(c > a && c > b) {
    console.log("The largest number is c: " + c);
    }
else {
        console.log("All numbers are equal");
        }
        