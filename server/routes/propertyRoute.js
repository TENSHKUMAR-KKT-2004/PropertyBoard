const express = require('express')

const {  getAllProperties, getPropertyDetail, createProperty, updateProperty, deleteProperty } = require('../controller/propertyController')

const router = express.Router()

router.route('/').get(getAllProperties)
router.route('/:id').get(getPropertyDetail)
router.route('/').post(createProperty)
router.route('/:id').patch(updateProperty)
router.route('/:id').delete(deleteProperty)

module.exports = router