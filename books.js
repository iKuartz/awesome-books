
const book1 = { title: 'first book', author: 'first author', id: 1 }

// Create a collection that keeps a list of books (hint: you can use an array of objects for that).
let listBooks = []

// Collecting information from inputs
const inputTitle = document.querySelector('#input-title')
const inputAuthor = document.querySelector('#input-author')
// const book1Title = document.querySelector('#book1-title')
// const book1Author = document.querySelector('#book1-author')
const inputAdd = document.querySelector('#input-add')

const booksSection = document.querySelector('#booklist')

/* eslint-disable no-tabs */
function generateHTML (details) {
  const template = `
        <div id="book${details.id}">
            <p id="book${details.id}-title">${details.title}</p>
            <p id="book${details.id}-author">${details.author}</p>
            <button id="book${details.id}-remove" class='remove-book'>Remove</button>
        </div>
      `
  return template
}

// Function to create object
inputAdd.addEventListener('click', () => {
  //   book1Title.textContent = inputTitle.value;
  //     book1Author.textContent = inputAuthor.value;
  const addedBook = Object.create(book1)
  addedBook.title = inputTitle.value
  addedBook.author = inputAuthor.value
  addedBook.id = listBooks.length + 1
  listBooks.push(addedBook)
  booksSection.innerHTML = ''
  listBooks.forEach((book) => {
    const HTMLElement = document.createElement('div')
    HTMLElement.innerHTML = generateHTML(book)
    booksSection.appendChild(HTMLElement)
  })
  // Updating local storage for books
  localStorage.setItem('listBooks', JSON.stringify(listBooks))
})

// Removing books
const bookList = document.querySelector('#booklist')
bookList.addEventListener('click', (e) => {
  let deleteBook = e.target.getAttribute('id')
  deleteBook = parseInt(deleteBook.replace(/\D/g, ''), 10)
  listBooks = listBooks.filter(book => book.id !== deleteBook)
  booksSection.innerHTML = ''
  listBooks.forEach((book) => {
    const HTMLElement = document.createElement('div')
    HTMLElement.innerHTML = generateHTML(book)
    booksSection.appendChild(HTMLElement)
  })
  // Updating local storage for books
  localStorage.setItem('listBooks', JSON.stringify(listBooks))
})

// Data is preserved in localStorage
window.onload = function storeData () {
  // Mantain data on the form
  let dataStored = {}

  inputTitle.addEventListener('change', (event) => {
    dataStored = { ...dataStored, inputTitle: event.target.value }
    localStorage.setItem('dataStored', JSON.stringify(dataStored))
  })

  inputAuthor.addEventListener('change', (event) => {
    dataStored = { ...dataStored, inputAuthor: event.target.value }
    localStorage.setItem('dataStored', JSON.stringify(dataStored))
  })

  if (localStorage.getItem('dataStored')) {
    dataStored = JSON.parse(localStorage.getItem('dataStored'))

    inputTitle.value = dataStored.inputTitle
    inputAuthor.value = dataStored.inputAuthor
  }

  // Mantain data on the book container
  if (localStorage.getItem('listBooks')) {
    listBooks = JSON.parse(localStorage.getItem('listBooks'))
    listBooks.forEach((book) => {
      const HTMLElement = document.createElement('div')
      HTMLElement.innerHTML = generateHTML(book)
      booksSection.appendChild(HTMLElement)
    })
  }
}
