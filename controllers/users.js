const User = require("../models/users")

const createUser = (req, res) => {
    User.create(req.body).then((user) => {
        res.status(201).send({
            user: user
        })
    })
}

const getUsers = (req, res) => {
    User.find({}).then((users) => {
        res.status(200).send({
            users: users
        })
    })
}

const getUserById = (req, res) => {
    User.find({_id: req.params._id}).then((user) => {
        res.status(200).send({
            user: user
        })
    })
}

const updateUserById = (req, res) => {
    User.findOneAndUpdate({_id: req.params._id}, req.body).then((user) => {
        res.status(204).send({
            user: user
        })
    })
}

const deleteUserById = (req, res) => {
    User.findOneAndDelete({_id: req.params._id}).then(() => {
        res.status(204).send("Resource deleted successfully.")
    })
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
}