const addButton = document.getElementById("addId");
const formContainer = document.getElementById("formContainer");
const bookForm = document.getElementById("bookForm");
const libraryDisplay = document.getElementById("libraryDisplay");
const myLibrary = [];

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
    displayBook();
}


addButton.addEventListener("click", () => {
    formContainer.style.display = "block";
});

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");

    const title = titleInput.value;
    const author = authorInput.value;

    const newBook = new Book(title, author);
    addBookToLibrary(newBook);

    titleInput.value = "";
    authorInput.value = "";
    formContainer.style.display = "none";

})



function displayBook(book) {
    libraryDisplay.innerHTML = "";
    myLibrary.forEach(book => {
        const bookInfo = document.createElement('div');
        bookInfo.textContent = `Title: ${book.title}, Author: ${book.author}`;
        libraryDisplay.appendChild(bookInfo);
    });
}
