let user = {
    firstName: "Jane",
    lastName: "Doe",
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    }
  };
  
  console.log(user.getFullName()); 
  