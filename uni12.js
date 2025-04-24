let char = 'e';

if ("aeiouAEIOU".includes(char)) {
  console.log(`${char} is a Vowel`);
} else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
  console.log(`${char} is a Consonant`);
} else {
  console.log("Not an alphabet");
}
