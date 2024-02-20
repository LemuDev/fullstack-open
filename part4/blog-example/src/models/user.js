const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        // the passwordHash should not be revealed
        delete returnedObject.password
    }
})


const User = mongoose.model('User', userSchema)


module.exports = User