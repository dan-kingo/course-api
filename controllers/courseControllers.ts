import { Request, Response } from "express";
import Course from "../models/courses";

export const getAllCourse = async(_req: Request, res: Response) => {
  try{
    const courses = await Course.find().populate('author', '-_id');
    res.json(courses);
  }catch(err){
    res.status(400).send((err as Error).message);
  }
  
};

export const getCourse = async (req: Request, res: Response) => {
  const course = await Course.findById(req.params.id);

  if (!course){
     res.status(404).send(`ther is no course with id ${req.params.id}`);
  }else{

    res.send(course);
  }
};

export const addCourse = async (req: Request, res: Response) => {
  const course = new Course({
    name: req.body.name,
    price: req.body.price,
    author: req.body.author,
    tags: req.body.tags,
    isPublished: req.body.isPublished,
  })
  try {
    await course.save(); // Save the course to the database
    res.send(course);
  } catch (error) {
    console.log(error);
    res.status(400).send((error as Error).message);
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  let course = await Course.findByIdAndDelete(req.params.id);
  if (!course){
    res.status(404).send(`course with id ${req.params.id} is not found!`);
  }else{
    res.send(course);
  }

};

export const updateCourse = async (req: Request, res: Response) => {
  let course = await Course.updateOne({ _id: req.params.id }, { name: req.body.name },{new: true});
  if (!course){
    res.status(404).send(`course with id ${req.params.id} is not found!`);
  }else{
  res.send(course);
  }
};
