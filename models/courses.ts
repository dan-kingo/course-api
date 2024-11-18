import mongoose from "mongoose";

// create a schema 
const courseSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 5, maxlength: 255},
  author: {type: String, required: true,minlength: 5},
  price: {type: Number, required: function() {return this.isPublished}},
  isPublished: {type: Boolean, required: true},
  tags: {type: Array, validate: {validator: function(v: Array<string>) {return v && v.length > 0}, message: 'A course should have at least one tag'}},
  date: {type: Date, default: Date.now},
})
// creating a model 
const Course = mongoose.model('Course', courseSchema)


export default Course;
