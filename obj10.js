let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
  };
  
  delete car.year;
  console.log('year' in car);
  