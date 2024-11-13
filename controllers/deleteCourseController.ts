import { Request, Response } from "express";
import { courses } from "..";

const deleteCourse = (req: Request, res: Response) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send(`course with id ${req.params.id} is not found!`);

  let index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
};
export default deleteCourse;
