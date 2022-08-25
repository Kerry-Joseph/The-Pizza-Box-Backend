const menuItemsRouter = require("express").Router()
const MenuItem = require("../Models/menuItem")

// get route
menuItemsRouter.get("/", async (req, res) => {
    try {
        res.status(200).json(await MenuItem.find({}))
    } catch (err) { 
        res.status(400).json(err)
    }
})

module.exports = menuItemsRouter