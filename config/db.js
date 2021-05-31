const mongoose = require('mongoose')

const MONGOURI = 'mongodb://localhost/test'

const InitiateMongoServer = async () => {
    try{
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        console.log("DB on!")
    }
    catch(error){
        console.log(error)
        throw error
    }
}

module.exports = InitiateMongoServer

