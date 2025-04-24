let secret = 7;
let guess = 0;

while (guess !== secret) {
  guess = parseInt(prompt("Guess the number between 1 and 10"));

  if (guess === secret) {
    alert("🎉 You guessed it right!");
  } else if (guess < secret) {
    alert("Too low 📉");
  } else {
    alert("Too high 📈");
  }
}



