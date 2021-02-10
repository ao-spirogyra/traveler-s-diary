import { takeSnapshots } from './function'
import cors from 'cors'
import { getAccessToken } from './function'

const express = require('express')
const app = express()
const port = 3000

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
  req 
  res.send('Hello puppeteer!')
  takeSnapshots(req.query.url)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
