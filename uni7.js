for (let i = 1; i <= 40; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
      console.log("DivBy4&6");
    } else if (i % 4 === 0) {
      console.log("DivBy4");
    } else if (i % 6 === 0) {
      console.log("DivBy6");
    } else {
      console.log("No Match");
    }
  }
  

// Divisibility Check (1–40)

// Loop from 1 to 40.
// If divisible by 4 and 6 → print "DivBy4&6"
// If only by 4 → print "DivBy4"
// If only by 6 → print "DivBy6"
// Else → print "No Match"