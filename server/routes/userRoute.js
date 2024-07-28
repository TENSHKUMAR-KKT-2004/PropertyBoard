const express = require('express')

const {  getAllusers, createUser, getUserById, editUserById } = require('../controller/userController')

const router = express.Router()

router.route('/').get(getAllusers)
router.route('/').post(createUser)
router.route('/:id').get(getUserById)
router.route('/:id').patch(editUserById)

module.exports = router