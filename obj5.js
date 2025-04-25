let product = {
    name: "Headphones",
    price: 1500,
    inStock: true
  };
  
  function displayProduct(product) {
    console.log(`Product: ${product.name}`);
    console.log(`Price: ₹${product.price}`);
    console.log(`Available: ${product.inStock ? "Yes" : "No"}`);
  }
  
  displayProduct(product);
  