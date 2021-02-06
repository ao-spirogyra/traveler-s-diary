import { takeSnapshots } from './function'
import cors from 'cors'

const express = require('express')
const app = express()
const port = 3001

app.use(cors())
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
