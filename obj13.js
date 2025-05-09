function Book(title, author) {
  this.title = title;
  this.author = author;
  this.getSummary = function () {
    return `${this.title} by ${this.author}`;
  };
}

let book1 = new Book("1984", "George Orwell");
console.log(book1.getSummary()); // Output: 1984 by George Orwell
