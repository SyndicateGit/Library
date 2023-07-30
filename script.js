
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


// Displays the Books 
function displayBooks(myLibrary){
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

// Add pre-existing books to test on
addBookToLibrary('Floriography: An Illustrated Guide to the Victorian Language of Flowers', 'Jessica Roux', 'Reference work', true);

displayBooks(myLibrary);