const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')

router.get('/users', usersController.getUsers)
router.get('/users/:_id', usersController.getUserById)
router.post('/users', usersController.createUser)
router.put('users/:_id', usersController.updateUserById)
router.delete('users/:_id', usersController.deleteUserById)

module.exports = router