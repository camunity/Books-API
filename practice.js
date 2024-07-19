const express = require('express')
const app = express()
const port = 3000


let users = [
  { id: 1, name: 'Alice', role: 'student' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
]

// users[0].role = "teacher"

const exampleCourse = {
  id: 'eng101', title: 'Introduction to Engineering', description: 'An introduction to the fundamentals of engineering.', instructor: 'Cam'
}

const courses = [
{ id: 'cmp101', title: 'Introduction to Computer Science', description: 'An introduction to the fundamentals of computer science.', instructor: 'Alice' },
{ id: 'cmp102', title: 'Data Structures and Algorithms', description: 'A study of data structures and algorithms.', instructor: 'Bob' },
{ id: 'cmp343', title: 'Web Development', description: 'A course on web development technologies.', instructor: 'Charlie' }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/test", function (req, res){
  //prepare data we want to send back
  res.send(true)
})

app.get('/users', function (req, res){
  res.send(users)
})

app.get('/courses', function (req, res){
  res.send(courses)
})

app.get('/cmp101', function (req, res){
  res.send(courses[0])
})

app.get('/cmp343', function (req,res){
  res.send(courses[2])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})