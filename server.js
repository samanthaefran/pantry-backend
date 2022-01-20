require('dotenv').config()

const { PORT = 3001, DATABASE_URL } = process.env

const express = require('express')

const app = express()

const mongoose = require('mongoose')

const cors = require('cors')
const morgan = require('morgan')

mongoose.connect(DATABASE_URL)

mongoose.connection
  .on("open", () => console.log("open"))
  .on("close", () => console.log ("close"))
  .on("error", (error) => console.log(error))

app.get('/', (req, res) => {
  res.send('im alive!')
})

app.listen(PORT, () => console.log(`${PORT}`))