const User = require("../models/users")

const createUser = async (req, res) => {
    try{
        await User.create(req.body).then((user) => {
            res.status(201).send({
                message: "Created",
                user: user
            })
        })
    }
    catch (error) {
        res.status(409).send({
            message: "Conflict"
        })
    }
}

const getUsers = async (req, res) => {
    try{
       await User.find({}).then((users) => {
            res.status(200).send({
                message: "Found",
                users: users
            })
        })
    }
    catch(error) {
        res.status(404).send({
            message: "Not found"
        })
    }
}

const getUserById = async (req, res) => {
    try{
        await User.find({_id: req.params._id}).then((user) => {
            res.status(200).send({
                message: "Found",
                user: user
            })
        })
    }
    catch(error){
        res.status(404).send({
            message: "Not found"
        })
    }
}

const updateUserById = async (req, res) => {
    try{
        await User.findOneAndUpdate({_id: req.params._id}, req.body, {new: true}).then((user) => {
            res.status(201).send({
                message: "Updated",
                user: user
            })
        })
    }
    catch(error){
        res.status(400).send({
            message: "Bad request"
        })
    }
}

const deleteUserById = async (req, res) => {
    try {
        await User.findOneAndDelete({_id: req.params._id}).then(() => {
            res.status(204).send({
                message: "Deleted"
            })
        })
    }
    catch (error) {
        res.status(400).send({
            message: "Bad request"
        })
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
}