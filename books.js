// Collecting information from inputs
const inputTitle = document.querySelector('#input-title')
const inputAuthor = document.querySelector('#input-author')
const inputAdd = document.querySelector('#input-add')
const booksSection = document.querySelector('#booklist')

const book1 = { title: 'first book', author: 'first author', id: 1 }

// Create a collection that keeps a list of books (hint: you can use an array of objects for that).
let listBooks = []
class ReplaceBooks {
    replacebooks(title, author, id) {
            this.title = title,
            this.author = author,
            this.id = id
    }
    addBook() {
      booksSection.innerHTML = '';
      listBooks.map((book) => {
      const HTMLElement = document.createElement('div');
      HTMLElement.innerHTML = generateHTML(book);
      booksSection.appendChild(HTMLElement);
      });
      // Updating local storage for books
      localStorage.setItem('listBooks', JSON.stringify(listBooks));
    }
    deleteBook(deleteBook) {
    listBooks = listBooks.filter(book => book.id !== deleteBook)
    booksSection.innerHTML = ''
    listBooks.forEach((book) => {
    const HTMLElement = document.createElement('div')
    HTMLElement.innerHTML = generateHTML(book)
    booksSection.appendChild(HTMLElement)
  })
    }
}
    // don't forget to check if empty books are not being added to list

const book2 = new ReplaceBooks();

function generateHTML (details) {
  const template = `
  <div id="book${details.id}">
      <p id="book${details.id}-details">${details.title} by ${details.author}</p>
      <button id="book${details.id}-remove" class='remove-book'>Remove</button>
  </div>
`
return template
}

  // Updating local storage for books
//   localStorage.setItem('listBooks', JSON.stringify(listBooks))
// })

// // Data is preserved in localStorage
// window.onload = function storeData() {
//       // Mantain data on the form
//     let dataStored = {}
//     inputTitle.addEventListener('change', (event) => {
//     dataStored = { ...dataStored, inputTitle: event.target.value }
//     localStorage.setItem('dataStored', JSON.stringify(dataStored))
//   })

//   inputAuthor.addEventListener('change', (event) => {
//     dataStored = { ...dataStored, inputAuthor: event.target.value }
//     localStorage.setItem('dataStored', JSON.stringify(dataStored))
//   })

//   if (localStorage.getItem('dataStored')) {
//     dataStored = JSON.parse(localStorage.getItem('dataStored'))

//     inputTitle.value = dataStored.inputTitle
//     inputAuthor.value = dataStored.inputAuthor
//   }

//   // Mantain data on the book container
//   if (localStorage.getItem('listBooks')) {
//     listBooks = JSON.parse(localStorage.getItem('listBooks'))
//     listBooks.forEach((book) => {
//       const HTMLElement = document.createElement('div')
//       HTMLElement.innerHTML = generateHTML(book)
//       booksSection.appendChild(HTMLElement)
//     })
//   }
// }


const bookList = document.querySelector('#booklist')

// Function to create object
inputAdd.addEventListener('click', () => {
  const book3 = new ReplaceBooks();
  book3.title = inputTitle.value;
  book3.author = inputAuthor.value;
  book3.id = listBooks.length + 1;
  listBooks.push(book3);
  book3.addBook();
})

// Removing books
bookList.addEventListener('click', (e) => {
    let deleteBook = e.target.getAttribute('id')
    deleteBook = parseInt(deleteBook.replace(/\D/g, ''), 10)
    book2.deleteBook(deleteBook)
})
