const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.static('public')) // to host our static files

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' }
]

// app.get('/', function(req, res){
//   res.send("hey hey!")
// })

// READ 
app.get('/books', function(req,res){
  res.send(books)
})

// CREATE
app.post('/books', function(req, res){
  // this request will be for creating a new book
  let newBook = req.body
  books.push(newBook)
  res.send(books)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})