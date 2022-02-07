
const book1 = { title: 'first book', author: 'first author', id: 1 }

// Create a collection that keeps a list of books (hint: you can use an array of objects for that).
const listBooks = [];

function BookConstructor(title, author, id) {
this.title = title;
this.author = author;
this.id = id;
}

const listAutomatic1 = new BookConstructor('My first book', 'first author', 1);
console.log(listAutomatic1);

// Collecting information from inputs
const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const book1Title = document.querySelector('#book1-title');
const book1Author = document.querySelector('#book1-author');
const inputAdd = document.querySelector('#input-add');

const booksSection = document.querySelector('#booklist');

/* eslint-disable no-tabs */
function generateHTML(details) {
  const template = `
        <div id="book${details.id}">
            <p id="book${details.id}-title">${details.title}</p>
            <p id="book${details.id}-author">${details.author}</p>
            <button id="book${details.id}-remove">Remove</button>
        </div>
      `;
  return template;
}

// Function to create object
inputAdd.addEventListener('click', () => {
//   book1Title.textContent = inputTitle.value;
//     book1Author.textContent = inputAuthor.value;
    const addedBook = Object.create(book1);
    addedBook.title = inputTitle.value;
    addedBook.author = inputAuthor.value;
    addedBook.id = listBooks.length + 1;
    listBooks.push(addedBook);
    console.log(listBooks);
    const arrayBook = [addedBook];
      // eslint-disable-next-line array-callback-return
    arrayBook.map((book) => {
        const HTMLElement = document.createElement('div');
        HTMLElement.innerHTML = generateHTML(book);
        booksSection.appendChild(HTMLElement);
    });
})




