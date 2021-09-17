const Stocks = require('./db')
const express = require('express')
const app = express()
const port = 8000
const path = require('path')

async function stocksCalc(){
    const stocks = await Stocks.find()
    return stocks
}

module.exports = stocksCalc

console.log(stocksCalc())

app.use(express.static('views'))
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res) => {
    res.render('index')
})





app.listen(port, () => {
    console.log("Server rodando na porta ", port)
})