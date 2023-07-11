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

function displayLibrary() {
    myLibrary.forEach((book) => {
        let newRow = document.createElement("tr");
        let authorElement = document.createElement("td");
        authorElement.textContent = `${book.author}`
        newRow.appendChild(authorElement)
        tableBody.appendChild(newRow)
    });
}

let book1 = new Book("The Hobbit", "J.R.R. Martin", 500, "read");

addBookToLibrary(book1);

let tableBody = document.querySelector(".table-body")

displayLibrary();