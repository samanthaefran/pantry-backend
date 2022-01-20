require('dotenv').config()

const { PORT = 3001 } = process.env

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('im alive!')
})

app.listen(PORT, () => console.log(`${PORT}`))