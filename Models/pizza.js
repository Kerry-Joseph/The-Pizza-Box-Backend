const mongoose = require("mongoose")

const PizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    size: {
        small: Boolean,
        medium: Boolean,
        large: Boolean
    },
    crust: {
        thin: Boolean,
        regular: Boolean,
        stuffed: Boolean
    },
    toppings: {
        pepperoni: Number,
	    sausage: Number,
		salami: Number,
		beef: Number,
		ham: Number,
		spinach: Number,
		pineapple: Number,
		anchovies: Number,
		olives: Number,
		onions: Number,
	    mushrooms: Number,
		greenPeppers: Number
    },
    price: Number
})

module.exports = mongoose.model("Pizza", PizzaSchema)