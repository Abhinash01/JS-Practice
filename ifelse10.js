let password = "Abhinash@123";
let strength = 0;

// Check length
if (password.length >= 8) {
    strength++;
}

// Check for uppercase letters
let hasUpperCase = false;
for (let i = 0; i < password.length; i++) {
    if (password[i] >= 'A' && password[i] <= 'Z') {
        hasUpperCase = true;
        break;
    }
}
if (hasUpperCase) {
    strength++;
}

// Check for lowercase letters
let hasLowerCase = false;
for (let i = 0; i < password.length; i++) {
    if (password[i] >= 'a' && password[i] <= 'z') {
        hasLowerCase = true;
        break;
    }
}
if (hasLowerCase) {
    strength++;
}

// Check for numbers
let hasNumber = false;
for (let i = 0; i < password.length; i++) {
    if (password[i] >= '0' && password[i] <= '9') {
        hasNumber = true;
        break;
    }
}
if (hasNumber) {
    strength++;
}

// Check for special characters
let hasSpecialChar = false;
let specialChars = "!@#$%^&*()_+{}[]:;'<>,.?/~`-=";
for (let i = 0; i < password.length; i++) {
    if (specialChars.includes(password[i])) {
        hasSpecialChar = true;
        break;
    }
}
if (hasSpecialChar) {
    strength++;
}

// Determine password strength
if (strength === 5) {
    console.log("Very Strong 💪");
} else if (strength === 4) {
    console.log("Strong ✅");
} else if (strength === 3) {
    console.log("Moderate ⚠️");
} else if (strength === 2) {
    console.log("Weak ❌");
} else {
    console.log("Very Weak 🚨");
}
