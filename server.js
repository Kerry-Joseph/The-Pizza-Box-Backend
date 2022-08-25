// dependencies ----------
require("dotenv").config()
const { PORT, DATABASE_URL } = process.env
const cors = require("cors")
const morgan = require("morgan")
const express = require("express")
const { default: mongoose } = require("mongoose")

const app = express()

// mongo Connection ---------
mongoose.connect(DATABASE_URL)
mongoose.connection
    .on("open", () => console.log("Mongo Connected"))
    .on("close", () => console.log("Mongo Disconnected"))
    .on("error", (error) => console.log(error))

// middleware ----------
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// routes ---------
// root
app.get("/", (req, res) => {
    res.send("works")
})

// listener ---------
app.listen(PORT, () => console.log(`listening... PORT ${PORT}`))