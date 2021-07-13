const User = require("../models/users")

const createUser = async (req, res) => {
    try {
        const doc = await User.create(req.body)
        if (!doc || doc.length === 0) {
            res.status(409).send({
                message: "Conflict"
            })
            return
        }
        res.status(201).send({
            message: "Created",
            user: doc
        })
    } catch (error) {
        res.status(500).send({
            error: error.name,
            message: error.message
        }) 
    }
}

const getUsers = async (req, res) => {
    try{
        const docs = await User.find({});
        if (!docs || docs.length === 0) {
            res.status(404).send({
                message: "Not found"
            })
            return
        }
        res.status(200).send({
            message: "Found",
            users: docs
        })
    } catch (error) {
        res.status(500).send({
            error: error.name,
            message: error.message
        }) 
    }
}

const getUserById = async (req, res) => {
    try {
        const doc = await User.find({_id: req.params._id})
        if (!doc || doc.length === 0) {
            res.status(404).send({
                message: "Not found"
            })
            return
        }
        res.status(200).send({
            message: "Found",
            user: doc
        })
    } catch (error) {
        res.status(500).send({
            error: error.name,
            message: error.message
        }) 
    }
}

const updateUserById = async (req, res) => {
    try {
        const doc = await User.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
        if (!doc){
            res.status(400).send({
                message: "Bad request"
            })  
            return 
        }
        res.status(201).send({
            message: "Updated",
            user: doc
        })
    } catch (error) {
        res.status(500).send({
            error: error.name,
            message: error.message
        }) 
    }
}

const deleteUserById = async (req, res) => {
    try {
        await User.findOneAndDelete({_id: req.params._id})
        res.status(200).send({
            message: "Deleted"
        })
    } catch (error) {
        res.status(500).send({
            error: error.name,
            message: error.message
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