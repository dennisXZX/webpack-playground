const express = require('express')
const fs = require('fs')
const path = require('path')

// instantiate an express app
const app = express()

// config the port the server is listening
const PORT = process.env.PORT | 3000

// handle static files
app.use(express.static(path.resolve(__dirname, '../client/dist')))

// config routes
app.get('/hello-world', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../client/dist/hello-world.html')

  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')

  res.send(contentFromHtmlFile)
})

app.get('/kiwi', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../client/dist/kiwi.html')

  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')

  res.send(contentFromHtmlFile)
})

// listen on the port
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})