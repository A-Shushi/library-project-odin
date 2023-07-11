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
        for (let key in book) {
            let rowElement = document.createElement("td");
            rowElement.textContent = `${book[key]}`;
            newRow.appendChild(rowElement);
        }
        tableBody.appendChild(newRow);
    });
}

// Initial books to display
let book1 = new Book("The Hobbit", "J.R.R. Martin", 500, "Read");
let book2 = new Book("Harry Potter", "JK Rowling", 372, "Read");
addBookToLibrary(book1);
addBookToLibrary(book2);

let tableBody = document.querySelector(".table-body")

displayLibrary();

let formButton = document.querySelector(".add-book-btn");
let form = document.querySelector(".add-book-form");
formButton.addEventListener("click", () => {
    form.classList.add("active")
})