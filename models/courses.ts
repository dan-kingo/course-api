import mongoose from "mongoose";
import Author from "./author";

// create a schema 
const courseSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 5, maxlength: 255},
  author: {type: mongoose.Schema.Types.ObjectId,ref : Author, required: true},
  price: {type: Number,min : 5, required: function() {return this.isPublished}},
  isPublished: {type: Boolean, required: true},
  tags: {type: Array, validate: {validator: function(v: Array<string>) {return v && v.length > 0}, message: 'A course should have at least one tag'}},
  date: {type: Date, default: Date.now},
})
// creating a model 
const Course = mongoose.model('Course', courseSchema)


export default Course;
