const express = require('express')
const InitiateMongoServer = require('./config/db')

const app = express()

InitiateMongoServer()

app.use(express.json())

app.use('/', require('./routes/users')) 

app.get('/', (req, res) => {
    res.send("Amizade")
})

app.listen(process.env.port || 4000, () => {
    console.log('Ready to go!')
})