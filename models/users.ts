import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 5, maxlength: 50},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true, minlength: 5, maxlength: 1024},
})

const User = mongoose.model('user', userSchema)

export default User