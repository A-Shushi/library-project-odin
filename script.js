let myLibrary = []

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let book1 = new Book("The Hobbit", "J.R.R. Martin", 500, "read");

addBookToLibrary(book1);