let myLibrary = [];

// function Book(title, author, pages, readStatus) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.readStatus = readStatus;
// }

class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
    let i = 0;
    myLibrary.forEach((book) => {
        let newRow = document.createElement("tr");
        for (let key in book) {
            let rowElement = document.createElement("td");
            rowElement.textContent = `${book[key]}`;
            newRow.appendChild(rowElement);
        }
        buttonElement = document.createElement("td");
        changeButton = document.createElement("button");
        changeButton.classList.add("change-btn");
        changeButton.textContent = "Status";
        changeButton.setAttribute("data-array", i);
        buttonElement.appendChild(changeButton);
        deleteButton = document.createElement("button");
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
            myLibrary.splice(index, 1);
            displayLibrary();
        });
    });
    let changeButtons = document.querySelectorAll(".change-btn");
    changeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            let index = button.getAttribute("data-array");
            book = myLibrary[index];
            if (book.readStatus === "Read") {
                book.readStatus = "Not Read";
            } else {
                book.readStatus = "Read";
            }
            displayLibrary();
        });
    });
}

function createNewBook() {
    let titleField = document.querySelector("#title");
    title = titleField.value;
    let authorField = document.querySelector("#author");
    author = authorField.value;
    let pagesField = document.querySelector("#pages");
    pages = pagesField.value;
    let checkbox = document.querySelector("#status");
    let checkboxStatus;
    if (checkbox.checked) {
        checkboxStatus = "Read";
    } else {
        checkboxStatus = "Not read";
    }
    newBook = new Book(title, author, pages, checkboxStatus);
    addBookToLibrary(newBook);
    displayLibrary();
    titleField.value = "";
    authorField.value = "";
    pagesField.value = "";
    form.classList.remove("active");
    checkbox.checked = false;
}

// Initial books to display
let book1 = new Book("The Hobbit", "J.R.R. Martin", 500, "Read");
let book2 = new Book("Harry Potter", "JK Rowling", 372, "Read");
addBookToLibrary(book1);
addBookToLibrary(book2);

let tableBody = document.querySelector(".table-body");

displayLibrary();

let formButton = document.querySelector(".add-book-btn");
let form = document.querySelector(".add-book-form");
formButton.addEventListener("click", () => {
    form.classList.add("active");
});

let bookButton = document.querySelector(".submit-book-btn");

bookButton.addEventListener("click", createNewBook);
