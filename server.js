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
  .on("close", () => console.log("close"))
  .on("error", (error) => console.log(error))

const PantrySchema = new mongoose.Schema({
  name: String,
  quantity: String,
})

const Pantry = mongoose.model("Pantry", PantrySchema)

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


app.get('/', (req, res) => {
  res.send('im alive!')
})

app.get("/pantry", async (req, res) => {
  try {
    res.json(await Pantry.find({}))
  } catch (error) {
    res.status(400).json(error)
  }
})

app.listen(PORT, () => console.log(`${PORT}`))