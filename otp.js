function generateOTP(length) {
    let otp = "";
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10); // generates a digit between 0-9
    }
    return otp;
  }
  
  
  const otp = generateOTP(6);
  console.log("Your OTP is:", otp);
  