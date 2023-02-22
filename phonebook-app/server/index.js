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