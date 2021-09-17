const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/stocks';
mongoose.connect( mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

const stocksSchema = new mongoose.Schema({
    name: String,
    ticket: String,
}, {collection: "stocks"})

module.exports = mongoose.model("stocks", stocksSchema)
