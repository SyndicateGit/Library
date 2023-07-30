
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
    console.log(element);
  });
}

// Add pre-existing books to test on
addBookToLibrary('Floriography: An Illustrated Guide to the Victorian Language of Flowers', 'Jessica Roux', 'Reference work', false);

displayBooks(myLibrary);