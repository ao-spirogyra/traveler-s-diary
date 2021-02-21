import { takeSnapshots } from './function'
import cors from 'cors'
import bodyParser from 'body-parser'

const express = require('express')
const app = express()
const port = 5000

app.use(bodyParser.json());

app.use(cors())
app.get('/', (req, res) => {
  req 
  res.send('Hello World!')
})

app.get('/secret', (req, res) => {
  if (req.headers.origin = 'chrome-extension://kjbmkglohpkfhmdmalpiimojcklgpibp') {
    res.status(200).json({
      clientSecret: process.env.DIARY_CLIENT_SECRET
    })
  }
})

app.post('/puppeteer', async (req, res) => {
  const { url, accessToken } = req.body
  res.set('Access-Control-Allow-Origin', 'chrome-extension://kjbmkglohpkfhmdmalpiimojcklgpibp')
  if (!url) {
    return res.status(422).json({
      message: "invalid request parameters"
    })
  } else if (!accessToken) {
    return res.status(401).json({
      message: "you must login to gyazo in advance"
    })
  }
  try {
    await takeSnapshots(url, accessToken)
    res.status(200).json({
      message: 'successfully uploaded'}
      )
  } catch (error) {
    res.status(400).json({
      message: error.toString()
    })
  }
  
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

process.on('uncaughtException', err => {
  console.log(`Uncaught Exception: ${err.message}`)
})