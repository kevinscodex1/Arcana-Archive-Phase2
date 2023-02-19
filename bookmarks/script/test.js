let formInput = document.querySelectorAll('.form-input') // getting the form input
let formBookSubmit = document.getElementById('new-book-form') // getting the DOM
let cardContainer = document.querySelector('.card-container') // getting the card container
let totalBooks = document.querySelector('.total-books') // getting total books DOM

// array for saving book data
let myLibrary = []

function Book(title, author, bookstatus) {
  this.bookId = myLibrary.length
  this.title = title
  this.author = author
  this.bookstatus = bookstatus
}
Book.prototype.saveBook = function() {
  // arrange the object to push
  let bookToSave = {
    bookId: this.bookId,
    title: this.title,
    author: this.author,
    bookstatus: this.bookstatus
  }

  myLibrary.unshift(bookToSave)

  render() // rendering list of book
}

function addBookToLibrary(e) {
  e.preventDefault() // preventing browser to reload

  let bookTitle = e.target[0].value // getting book title
  let bookAuthor = e.target[1].value // getting book author
  let bookstatus = e.target[2].value // getting has been read

  let insertBook = new Book(bookTitle, bookAuthor, bookstatus)

  insertBook.saveBook()

  // close the modal after insert the book
  modal.style.display = "none"

  // clear the form after submit
  formInput.forEach(function(item, index){
    item.value = ''
  })

  let deleteButton = document.querySelectorAll('.delete-button') // getting the delete button
  deleteButton.forEach(key => key.addEventListener('click', deleteFunc))
}

// render array to HTML
function render() {
  // remove card before adding new one
  cardContainer.innerHTML = ''

  myLibrary.forEach(function(currentValue, index) {
    cardContainer.innerHTML += cardElement(currentValue)
  })

  // rendering total books
  renderBooks()
}

// rendering total of the book
function renderBooks(){
  totalBooks.innerHTML = myLibrary.length
}

// card element
function cardElement(data) {
  return `
  <div class="card">
    <div class="card-top">
      <div class="content">
        <div class="left-side">
          <p style="color:white;">${data.bookId}</p>
        </div> <!-- left-side -->
        <div class="right-side" text>
          <p class="title"><b>Title : ${data.title} </b></p>
          <p><b>Author :</b> ${data.author} <b> Book Status :</b><b style="color:orange;"> ${data.bookstatus}</b></p>
          
        </div> <!-- right-side -->
      </div>
    </div> <!-- card-top -->
    <div class="card-bottom">
      <button class="warning-button" style="margin-left:200px;"><b>Read</b></button>
      <button class="delete-button" style="margin-right:200px;"><b>Delete</b></button>
      <button class="delete-button" data-book="${data.bookId}>delete</button>
    </div> <!-- card-bottom -->
  </div> <!-- card -->
  `
}

// function for deleting the book data
function deleteFunc(e){
  
  console.log(e.target.dataset.book)

}



render()

// form submit eventListener
formBookSubmit.addEventListener('submit', addBookToLibrary)
