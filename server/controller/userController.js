const User = require('../db/models/userSchema')
const dotenv = require('dotenv')
const cloudinary = require("cloudinary")

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllusers = async(req,res)=>{
    try {
        const users = await User.find({}).limit(req.query._end) 

        res.status(200).json(users) 
    } catch (error) {
        res.status(500).json({ message: error.message }) 
    }
}

const createUser = async(req,res)=>{
    try {
        const { name, email, avatar, role } = req.body
        
        const userExists = await User.findOne({ email }) 

        if (userExists) {
            return res.status(200).json(userExists) 
        }

        const newUser = await User.create({
            name,
            email,
            avatar,
            role
        })
        
        res.status(200).json(newUser) 
    } catch (error) {
        res.status(500).json({ message: error.message }) 
    }
}

const getUserById = async(req,res)=>{
    try {
        const { id } = req.params

        const user = await User.findOne({ _id: id }).populate("allProperties") 

        if (user) {
            res.status(200).json(user) 
        } else {
            res.status(404).json({ message: "User not found" }) 
        }
    } catch (error) {
        res.status(500).json({ message: error.message }) 
    }
}

const editUserById = async(req,res)=>{
    const userId = req.params.id;
    const {
        name,
        avatar,
        banner,
        role,
        address,
        phonenumber
    } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const bannerURL = await cloudinary.uploader.upload(banner);
        user.banner = bannerURL.url
        const avatarURL = await cloudinary.uploader.upload(avatar);
        user.avatar = avatarURL.url

        if (name) user.name = name

        if (role) user.role = role;
        if (address) user.address = address;
        if (phonenumber) user.phonenumber = phonenumber;

        const updatedUser = await user.save();
        
        res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    getAllusers,
    createUser,
    getUserById,
    editUserById
}