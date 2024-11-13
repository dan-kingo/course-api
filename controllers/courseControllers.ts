import { Request, Response } from "express";
import courses, { Course } from "../models/courses";

export const getAllCourse = (_req: Request, res: Response) => {
  res.send(courses);
};

export const getCourse = (req: Request, res: Response) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course)
    res.status(404).send(`ther is no course with id ${req.params.id}`);
  res.send(course);
};

export const addCourse = (req: Request, res: Response) => {
  const course: Course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);

  res.send(course);
};

export const deleteCourse = (req: Request, res: Response) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send(`course with id ${req.params.id} is not found!`);

  let index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
};

export const updateCourse = (req: Request, res: Response) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send(`course with id ${req.params.id} is not found!`);

  // update the course and send it to the client
  course.name = req.body.name;
  res.send(course);
};
