const mongoose = require("mongoose")

const MenuItemSchema = new mongoose.Schema({
    catagory: String,
    name: String,
    price: String
})

module.exports = mongoose.model("MenuItem", MenuItemSchema)