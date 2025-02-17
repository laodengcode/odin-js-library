const myLibrary = [];

let harryPorter = new Book("Harry Porter", "JK", "this is an amazing magic book.this is an amazing magic book.this is an amazing magic book.", 0, 300, false);
let peppa = new Book("Peppa", "Mesd", "Peppa pig and her family", 50, true);
let money = new Book("Earn your money", "sdfs", "build your business at weekend", 32, false);
let habits = new Book("Atomic Habbit", "sdasaa", "small habits great success", 30, true);

myLibrary.push(harryPorter);
myLibrary.push(peppa);
myLibrary.push(money);
myLibrary.push(habits);

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
        const status = document.createElement('p');
        status.textContent = book.isRead ? "Finished" : "Unread";
        status.className = 'status';
        const bookDescription = document.createElement('p');
        bookDescription.className = 'description';
        bookDescription.textContent = book.description;
        const actions = document.createElement('div');
        actions.className = 'actions';
        const remove = document.createElement('button');
        remove.className = 'remove';
        remove.textContent = 'Delete';
        const read = document.createElement('button');
        read.className = 'read';
        read.textContent = 'Read';
        actions.append(remove, read);

        remove.addEventListener('click', () => {
            const bookIndex = myLibrary.indexOf(book);
            if (bookIndex > -1) {
                myLibrary.splice(bookIndex, 1);
                displayLibrary();
            }
        })

        read.addEventListener('click', () => {
            book.toggleReadStatus();
            displayLibrary();
        })


        bookItem.append(bookName, bookAuthor, status, bookDescription, actions);
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