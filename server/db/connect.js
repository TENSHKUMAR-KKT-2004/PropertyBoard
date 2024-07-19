const mongoose = require("mongoose")

const connect = (url)=>{
    mongoose.set('strictQuery',true)

    mongoose.connect(url)
        .then(()=>console.log('MongoDB connected...'))
        .catch((err)=>console.log('DB connection error: ',err ))
}

module.exports = {connect}