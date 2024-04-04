const express = require('express')
const app = express()


function hello1 (req, res, next) {
  console.log("Hello from middleware 1")
  next()
}

function hello2 (req, res, next) {
  console.log("Hello from middleware 2")
  next()
}


app.get('/', [hello1, hello2], (req, res) => {
  console.log("This is the middleware in the final function")
  res.send("middleware call completed!")
})

const PORT = 3006
app.listen(PORT, () => console.log(`Server running on port->${PORT}`))

