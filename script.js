const myLibrary = [];

let harryPorter = new Book("Harry Porter", "JK", "this is an amazing magic book.this is an amazing magic book.this is an amazing magic book.");
myLibrary.push(harryPorter);
myLibrary.push(harryPorter);
myLibrary.push(harryPorter);
myLibrary.push(harryPorter);

function Book(name, author, description) {
    this.name = name;
    this.author = author;
    this.description = description;
}

function addBookToLibrary(name, author, description) {
    let book = new Book(name, author, description);
    myLibrary.push(book);
}

function displayLibrary() {
    const bookList = document.querySelector(".container");
    bookList.innerHTML = '';

    myLibrary.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book';
        const bookName = document.createElement('h3');
        bookName.textContent = book.name;
        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = book.author;
        bookAuthor.className = 'author';
        const bookDescription = document.createElement('p');
        bookDescription.textContent = book.description;

        bookItem.append(bookName, bookAuthor, bookDescription);
        bookList.appendChild(bookItem);
    })
}

displayLibrary();