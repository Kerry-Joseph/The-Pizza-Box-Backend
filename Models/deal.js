const mongoose = require("mongoose")

const DealSchema = new mongoose.Schema({
    name: String,
    content: String,
    price: Number
})

module.exports = mongoose.model("Deal", DealSchema)