
// Array to hold Book Objects
let myLibrary = [];

// Book object constructor function
function Book(title, author, genre, isRead){
  this.title = title
  this.author = author
  this.genre = genre
  this.isRead = isRead
}

// Takes user input to add Book Object to myLibrary
function addBookToLibrary(title, author, genre, isRead){
  const book = new Book(title, author, genre, isRead)
  myLibrary.unshift(book);
}

// Add pre-existing books to test on
addBookToLibrary('Floriography: An Illustrated Guide to the Victorian Language of Flowers', 'Jessica Roux', 'Reference work', true);


// Displays the Books 
function displayBooks(myLibrary){
  // Clear Library before redisplaying
  document.querySelector('.book-display-container').innerHTML="";

  myLibrary.forEach(element => {
    /*Inserts Book html to book container. Info based on object.*/
    const div = document.createElement('div');
    div.setAttribute('class', 'book');
    div.innerHTML=`
    <div class="book-delete">x</div>
    <span class="book-title">
      <span class="book-category">Title: </span>
      <span class="book-info">${element.title}</span>
    </span>
    <span class="book-author">
      <span class="book-category">Author: </span>
      <span class="book-info">${element.author}</span> 
    </span>
    <span class="book-genre">
      <span class="book-category">Genre: </span>
      <span class="book-info">${element.genre}</span>
    </span>
    <label class="isRead-toggle" for="isRead">
      <span class="isRead-toggle">Read:</span>
      <input type="checkbox" name="isRead" id="isRead">
    </label>
    `;

    /*Checks read box if read*/
    div.querySelector('input').setAttribute('checked', element.isRead);

    document.querySelector('.book-display-container').appendChild(div);

  });
}

// Displays form
function openForm(){
  document.querySelector(".form-container").style.display="flex";
}

// Closes form
function closeForm(){
  document.querySelector(".form-container").style.display="none";
}

// Default form closed
closeForm();

function getBookFromInput(){
  const title = document.getElementById('title').value 
  const author = document.getElementById('author').value
  const genre = document.getElementById('genre').value
  const isRead = document.getElementById('isRead').checked
  return new Book(title, author, genre, isRead)
}

function submitForm(e){

  e.preventDefault();

  const newBook = getBookFromInput()
  
  // Prevents submission if required fields are empty
  if(newBook.title == '' || newBook.author ==''|| newBook.genre == ''){
    alert("Required fields are empty.")
    return
  }
  
  // Add new book to 
  addBookToLibrary(newBook.title, newBook.author, newBook.genre, newBook.isRead);

  /*Close form after submitting*/
  closeForm();

  /**Reset form values */
  document.getElementById('title').value = "";
  document.getElementById('author').value = "";
  document.getElementById('genre').value = "";
  document.getElementById('isRead').removeAttribute('checked');

  /** Refreshes Library*/
  displayBooks(myLibrary);
}
// Query selectors and Event Listeners

  //+ New Book button opens form
const newBookBtn = document.querySelector('.button-4')
newBookBtn.addEventListener("click", openForm)

  // form close button closes form
  const closeFormBtn = document.querySelector("#cancel")
  closeFormBtn.addEventListener("click", closeForm);

  // form Add button adds book to library.
  const addBook = document.querySelector("#add")
  addBook.addEventListener("click", submitForm);



displayBooks(myLibrary);