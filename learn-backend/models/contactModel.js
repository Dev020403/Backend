const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add name"],
    },
    email: {
        type: String,
        required: [true, "please add email"],
    },
    phone: {
        type: String,
        required: [true, "please add phone number"],
    }
}, {
    timestamps: true,
})
module.exports = mongoose.model("Contact",contactSchema)