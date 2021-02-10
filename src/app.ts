import { takeSnapshots } from './function'
import cors from 'cors'
import { getAccessToken } from './function'
import bodyParser from 'body-parser'

const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json());

app.use(cors())
app.get('/', (req, res) => {
  req 
  res.send('Hello World!')
})

app.get('/token', async (req, res) => {
  req
  const accessToken = await getAccessToken(req.query.code)
  res.send(accessToken)
})

app.post('/puppeteer', (req, res) => {
  res.send('Hello puppeteer!')
  takeSnapshots(req.query.url, req.body.accessToken)
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
