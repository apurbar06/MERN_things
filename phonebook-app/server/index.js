// Create Node Server
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})


// Connect MongoDB Database
const mongoose = require('mongoose')
const DB = 'mongodb+srv://apurba:mongodb@cluster0.bcmffzk.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})


// Create Post Route
const PhoneBook = require('./model/PhoneBook')

app.post('/add-phone', async(req,res) => {
    const phoneNumber = new PhoneBook(req.body)
    console.log(req.body);

    try{
        await phoneNumber.save()
        res.status(201).json({
            status: 'Success',
            data : {
                phoneNumber
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})