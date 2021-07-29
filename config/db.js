const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const {
    MONGO_DB_USER,
    MONGO_DB_PASS,
    MONGO_URI,
    MONGO_DB_PORT,
    MONGO_DB_NAME
} = process.env

const url = `mongodb://${MONGO_DB_USER}:${MONGO_DB_PASS}@${MONGO_URI}:${MONGO_DB_PORT}/${MONGO_DB_NAME}?authSource=admin`;

const InitiateMongoServer = async () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })

    mongoose.connection.on('error', () => console.error("connection error: "))
    mongoose.connection.once('open', () => console.log("db on"))
}

module.exports = InitiateMongoServer

