class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

class Library {
    constructor() {
        this.myLibrary = [];
    }
    addBookToLibrary = (book) => {
        this.myLibrary.push(book);
    };
    renderLibrary = () => {
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        }
        let i = 0;
        this.myLibrary.forEach((book) => {
            let newRow = document.createElement("tr");
            for (let key in book) {
                let rowElement = document.createElement("td");
                rowElement.textContent = `${book[key]}`;
                newRow.appendChild(rowElement);
            }
        let buttonElement = document.createElement("td");
        let changeButton = document.createElement("button");
        changeButton.classList.add("change-btn");
        changeButton.textContent = "Status";
        changeButton.setAttribute("data-array", i);
        buttonElement.appendChild(changeButton);
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "X";
        deleteButton.setAttribute("data-array", i);
        buttonElement.appendChild(deleteButton);
        newRow.appendChild(buttonElement);
        tableBody.appendChild(newRow);
        i++;
        });
        let deleteButtons = document.querySelectorAll(".delete-btn");
        deleteButtons.forEach((button) => {
            button.addEventListener("click", () => {
                let index = button.getAttribute("data-array");
                this.myLibrary.splice(index, 1);
                this.renderLibrary();
            });
        });
        let changeButtons = document.querySelectorAll(".change-btn");
        changeButtons.forEach((button) => {
            button.addEventListener("click", () => {
                let index = button.getAttribute("data-array");
                let book = this.myLibrary[index];
                if (book.readStatus === "Read") {
                    book.readStatus = "Not Read";
                } else {
                    book.readStatus = "Read";
                }
                this.renderLibrary();
            });
        });
    };
    createNewBook = () => {
        let titleField = document.querySelector("#title");
        let title = titleField.value;
        let authorField = document.querySelector("#author");
        let author = authorField.value;
        let pagesField = document.querySelector("#pages");
        let pages = pagesField.value;
        let checkbox = document.querySelector("#status");
        let checkboxStatus;
        if (checkbox.checked) {
            checkboxStatus = "Read";
        } else {
            checkboxStatus = "Not read";
        }
        let newBook = new Book(title, author, pages, checkboxStatus);
        this.addBookToLibrary(newBook);
        this.renderLibrary();
        titleField.value = "";
        authorField.value = "";
        pagesField.value = "";
        form.classList.remove("active");
        checkbox.checked = false;
    }
}

// Initialise Library object
const library = new Library();

// Initial books to display
let book1 = new Book("The Hobbit", "J.R.R. Martin", 500, "Read");
let book2 = new Book("Harry Potter", "JK Rowling", 372, "Read");
library.addBookToLibrary(book1);
library.addBookToLibrary(book2);

let tableBody = document.querySelector(".table-body");

library.renderLibrary();

let formButton = document.querySelector(".add-book-btn");
let form = document.querySelector(".add-book-form");
formButton.addEventListener("click", () => {
    form.classList.add("active");
});

let bookButton = document.querySelector(".submit-book-btn");

bookButton.addEventListener("click", library.createNewBook);
