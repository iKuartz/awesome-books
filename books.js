// Create a collection that keeps a list of books (hint: you can use an array of objects for that).
const listBooks = [{title: 'first book', author: 'first author', id:1},{title: 'second book', author: 'second author', id:2} ];

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

inputAdd.addEventListener('click', () => {
  book1Title.textContent = inputTitle.value;
  book1Author.textContent = inputAuthor.value;

})




