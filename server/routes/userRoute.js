const express = require('express')

const {  getAllusers, createUser, getUserById } = require('../controller/userController')

const router = express.Router()

router.route('/').get(getAllusers)
router.route('/').post(createUser)
router.route('/:id').get(getUserById)

module.exports = router