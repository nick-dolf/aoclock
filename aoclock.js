const PORT = process.env.PORT || 5000
const express = require('express')
const app = express()

let message = "Welcome to Aoclock"

if (process.env.NODE_ENV === 'production') {
  message += " - production environment"
  message += " - webhook and restart working"
} else {
  console.log("started node in development mode")
  message += " - development environment"
}

app.get('/', (req, res) => {
  res.send(message)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`) )
