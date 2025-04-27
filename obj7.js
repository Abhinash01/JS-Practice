const student = {
    name: "Abhinash",
    age: 23,
    course: "BCA",
    college: "XYZ University",
    
    introduce: function() {
        return `Hi, I am ${this.name}, ${this.age} years old, studying ${this.course} at ${this.college}.`;
    }
};


console.log(student.introduce());