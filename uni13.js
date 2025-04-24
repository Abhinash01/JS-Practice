let username = "abhinash";
let password = "12345";

let inputUsername = prompt("Enter username:");
let inputPassword = prompt("Enter password:");

if (inputUsername === username && inputPassword === password) {
  alert("Login successful! ✅");
} else {
  alert("Invalid credentials ❌");
}
