const express = require('express')
const InitiateMongoServer = require('./config/db')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

InitiateMongoServer()

app.use(express.json())

app.use('/', require('./routes/users'))

app.listen(process.env.PORT || 4000, () => {
    console.log(`Ready to go on port ${process.env.PORT || 4000}`)
})