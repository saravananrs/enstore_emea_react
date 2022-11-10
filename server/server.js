const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 8000
const accoutRouter = require('./routes/account-router')
const catalogRouter = require('./routes/catalog-router')
const checkoutRouter = require('./routes/checkout-router')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
 });

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/account', accoutRouter)
app.use('/api/catalog', catalogRouter)
app.use('/api/checkout', checkoutRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
