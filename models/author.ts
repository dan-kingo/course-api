import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 50},
    bio: {type: String, required: true, minlength: 10, maxlength: 255},
    website:{type: String, required: true, minlength: 5, maxlength: 50},
});

const Author = mongoose.model('Author', authorSchema);

export default Author;
