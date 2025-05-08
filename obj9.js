function countProperties(obj) {
    return Object.keys(obj).length;
  }
  
  let obj = { a: 1, b: 2, c: 3 };
  console.log(countProperties(obj)); // Output: 3
  