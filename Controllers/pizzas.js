const pizzasRouter = require("express").Router()
const Pizza = require("../Models/pizza")

// get route
pizzasRouter.get("/", async (req, res) => {
    try {
        res.status(200).json(await Pizza.find({}))
    } catch (err) { 
        res.status(400).json(err)
    }
})

// create route
pizzasRouter.post("/", async (req, res) => {
    try {
        res.status(200).json(await Pizza.create(req.body))
    } catch (err) {
        res.status(400).json("---- NAME MUST BE UNIQUE ----  " + err)
    }
})

module.exports = pizzasRouter