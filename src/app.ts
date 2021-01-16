import { takeSnapshots } from './function'

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  req 
  res.send('Hello World!')
})

app.get('/puppeteer', (req, res) => {
  req 
  res.send('Hello puppeteer!')
  takeSnapshots(req.query.url)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
