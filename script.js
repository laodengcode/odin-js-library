const myLibrary = [];

let harryPorter = new Book("Harry Porter", "JK", "this is an amazing magic book.this is an amazing magic book.this is an amazing magic book.", 0, 300, false);
myLibrary.push(harryPorter);
myLibrary.push(harryPorter);
myLibrary.push(harryPorter);
myLibrary.push(harryPorter);

function Book(name, author, description, id, pageNumber, isRead) {
    this.name = name;
    this.author = author;
    this.description = description;
    this.id = id;
    this.pageNumber = pageNumber;
    this.isRead = isRead;
}

Book.prototype.toggleReadStatus = function () {
    this.isRead = !this.isRead;
}

function addBookToLibrary(name, author, description, pageNumber, isRead) {
    let id = myLibrary.length === 0 ? 0 : myLibrary[myLibrary.length - 1].id + 1;
    let book = new Book(name, author, description, id, pageNumber, isRead);
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


let addBookModal = document.getElementById('addBook');

document.getElementById('openDialog').addEventListener('click', () => {
    addBookModal.showModal();
})

document.getElementById('closeDialog').addEventListener('click', () => {
    addBookModal.close();
})

document.getElementById('bookForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const description = document.getElementById('description').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').checked;

    console.log(name);
    console.log(isRead);

    addBookToLibrary(name, author, description, pages, isRead);
    addBookModal.close();
    event.target.reset();
    displayLibrary();
})


displayLibrary();