import { Request, Response } from "express";
import { courses } from "..";

const updateCourse = (req: Request, res: Response) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send(`course with id ${req.params.id} is not found!`);

  // update the course and send it to the client
  course.name = req.body.name;
  res.send(course);
};
export default updateCourse;
