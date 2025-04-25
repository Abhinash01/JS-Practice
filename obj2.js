let scores = {
    math: 85,
    english: 78,
    science: 92
  };
  
  for (let subject in scores) {
    console.log(`${subject}: ${scores[subject]}`);
  }
  