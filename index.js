const express = require('express')
const app = express()
const mongoose = require('mongoose')

function hello1 (req, res, next) {
  console.log("Hello from middleware 1")
  next()
}

function hello2 (req, res, next) {
  console.log("Hello from middleware 2")
  next()
}

mongoose.connect('mongodb+srv://danapang2022:bestPasswordEver@cluster0.xwbbwww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

app.get('/', [hello1, hello2], (req, res) => {
  console.log("This is the middleware in the final function")
  res.send("middleware call completed!")
})

const PORT = process.env.PORT || 3006
app.listen(PORT, () => console.log(`Server running on port->${PORT}`))

module.exports = app
