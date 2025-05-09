function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let original = { name: "Tom", details: { age: 25, city: "Delhi" } };
let copy = cloneObject(original);

console.log(copy);
