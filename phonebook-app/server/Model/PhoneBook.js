// database schema model for phonebook
const mongoose = require('mongoose')

const phoneBookSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    phone: {
        type : Number,
        required : true
    }
})

const PhoneBook = mongoose.model('PhoneBook',phoneBookSchema)

module.exports = PhoneBook