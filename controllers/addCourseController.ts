import { Request, Response } from "express";
import Course, { courses } from "..";

const addCourse = (req: Request, res: Response) => {
  const course: Course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);

  res.send(course);
};
export default addCourse;
