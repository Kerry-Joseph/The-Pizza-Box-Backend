const mongoose = require("mongoose")

const MenuItemSchema = new mongoose.Schema({
    category: String,
    name: String,
    price: Number
})

module.exports = mongoose.model("MenuItem", MenuItemSchema)