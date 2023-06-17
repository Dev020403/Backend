const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username: {
        type: String,
        require:[true,"please enter a username"]
    },
    email: {
        type: String,
        require:[true,"please enter email address"],
        unique: [true,"email address already taken"]
    },
    password: {
        type: String,
        require:[true,"please enter email address"]   
    }
},{
    timestamps:true,
});

module.exports = mongoose.model('User',userSchema);