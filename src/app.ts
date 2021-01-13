import { takeSnapshots } from './puppeteer'
import { uploadToGyazo } from './upload'


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  req 
  res.send('Hello World!')
})

app.get('/puppeteer', (req, res) => {
  req 
  res.send('Hello puppeteer!')
  takeSnapshots(req.query.url)
})

app.get('/upload', (req, res) => {
  req
  res.send('this is a page which executes a method to upload an image to gyazo')
  uploadToGyazo()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
