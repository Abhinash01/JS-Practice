
let amount = 100; // in USD
let currency = "INR";

if (currency === "INR") {
  console.log("Converted: ₹" + (amount * 83));
} else if (currency === "EUR") {
  console.log("Converted: €" + (amount * 0.92));
} else {
  console.log("Unsupported currency");
}
