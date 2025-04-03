// Check if a Year is a Century Year (100, 200, 300... etc.)
let year = prompt("Enter a year: ");
if (year % 100 == 0) {
    console.log(year + " is a century year.");
} else {
    console.log(year + " is not a century year.");
} 
