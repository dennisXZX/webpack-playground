const express = require('express')
const fs = require('fs')
const path = require('path')

// instantiate an express app
const app = express()

const PORT = process.env.PORT | 3000;

const staticMiddleware = express.static(path.resolve(__dirname, '../client/dist'))

// handle the static files like JS, CSS, fonts and images
app.use(staticMiddleware)

// config routes
app.get('/', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../client/dist/app-launcher.html')

  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')

  res.send(contentFromHtmlFile)
})

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


app.get('/react', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../client/dist/react.html')

  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8')

  res.send(contentFromHtmlFile)
})

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}.`)
})