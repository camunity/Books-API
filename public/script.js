// Element References for use in code

let addBookForm = document.getElementById('add-book-form')

// add event listener for when the page loads
document.addEventListener('DOMContentLoaded', async function(){
  // use fetch api to request our books from the server
  // don't forget to add async to our function ;) 

   let response = await fetch('/books', {method: "GET"})
  // maybe store the books in localStorage

  let books = await response.json()

  // get a reference to the table 
  let booksList = document.getElementById("books-list")


  // loop through array and create a row for each book 

  books.forEach(function(book){ // use for each to loop through array
   let row = document.createElement('tr') // use js to create a new table row element

    //create HTML for each row data
  row.innerHTML = `
    <td> ${book.title} </td>
    <td> ${book.author} </td>
  `
    booksList.appendChild(row) // add new row to the table

  })
  
})


// add event listener for when form is submitted
addBookForm.addEventListener("submit", async function(event){

    event.preventDefault() //stop page from reloading on submit
    
    // get the values of our title and author for the book
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value

    let newBook = {title, author} // {"title": title, "author": author}
    // newBook.title 
    
    // console.log(title, author) // test it works!
  
    // send that new book to our server with a POST request to /books
    // don't forget to add async key to the function ;)

    let response = await fetch('/books', { // make a post request to our server /books
      method: "POST",
      headers: {'Content-Type': 'application/json'}, // tell the server we're sending json
      body: JSON.stringify(newBook) // turn the data into a string 
    })

    let books = await response.json() // wait for server response as json

  // clear the form for the user
  document.getElementById('title').value = ""
  document.getElementById('author').value = ""
  

  // update table info with javascript!

  // get a reference to the table 
  let booksList = document.getElementById("books-list")
  

  // loop through array and create a row for each book 

  books.forEach(function(book){ // use for each to loop through array
   let row = document.createElement('tr') // use js to create a new table row element

    //create HTML for each row data
  row.innerHTML = `
    <td> ${book.title} </td>
    <td> ${book.author} </td>
  `
    booksList.appendChild(row) // add new row to the table
     
  })
  
    
})

