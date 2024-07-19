const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const {connect} = require('./db/connect')

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json({limit: '50mb'}))

app.get('/',(req,res)=>{
    res.send('hello')
})

const startServer = async ()=>{
    try{
        connect(process.env.MONGODB_URL)

        app.listen(8080,()=>{
            console.log('Server started on 8080')
        })
    }catch(error){
        console.log(error)
    }
}

startServer()