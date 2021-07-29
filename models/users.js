const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema

const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return re.test(email)
}

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: [validateEmail, "Please fill a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    permissionLevel: {
        type: Number,
        required: [true, "Permission level is required"]
    }
})

UserSchema.pre('save', async function (next) {
    const user = this

    if (user.isNew){
        user.firstName = user.firstName.trim()
        user.lastName = user.lastName.trim()
        user.email = user.email.toLowerCase().trim()
    }

    try {
        if (!user.isModified('password')){
            return next()
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(user.password, salt)
        user.password = hash
        next()
    } catch (error) {
        next(error)
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = User