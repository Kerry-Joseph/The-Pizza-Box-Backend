const dealsRouter = require("express").Router()
const Deal = require("../Models/deal")

// get route
dealsRouter.get("/", async (req, res) => {
    try {
        res.status(200).json(await Deal.find({}))
    } catch (err) { 
        res.status(400).json(err)
    }
})

module.exports = dealsRouter