const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, "connection error:"))
db.once('open', () => {
    console.log('db on')
})

app.use(express.json())

app.use('/', require('./routes/users'))

app.listen(process.env.port || 4000, () => {
    console.log('Ready to go!')
})