const mongoose = require("mongoose")

const DealSchema = new mongoose.Schema({
    name: String,
    content: String,
    img: {
        type: String,
        default: "https://images.unsplash.com/photo-1611599538163-c792e7f4db19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    price: Number
})

module.exports = mongoose.model("Deal", DealSchema)