const mongoose = require("mongoose")

const MenuItemSchema = new mongoose.Schema({
    category: String,
    name: String,
    img: {
        type: String,
        default: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    price: Number
})

module.exports = mongoose.model("MenuItem", MenuItemSchema)