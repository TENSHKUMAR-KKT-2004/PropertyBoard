const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
    },
    banner: {
        type: String,
        default: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
    },
    role: {
        type: String,
        required: true,
        default: 'agent'
    },
    address:{
        type: String,
        default: '-'
    },
    phonenumber: {
        type: String,
        default: '-'
    },
    allProperties: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Property'
    }]
})

const userModel = mongoose.model('User',UserSchema)

module.exports = userModel