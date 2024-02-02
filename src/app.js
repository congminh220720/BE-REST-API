const express = require('express')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')

/// init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

/// connect db

app.get('/', (req,res,next) => {
    res.send('hello world')
})
// error handling 


module.exports = app