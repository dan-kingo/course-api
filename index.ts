import express from "express";
import router from "./routes/courseRouter";
const app = express();
const port = process.env.PORT || 3000;
// const schema = z.object({
//   name: z.string().min(3, "name must be at least 3 characters long!"),
// });

export default interface Course {
  id: number;
  name: string;
}
export const courses: Course[] = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
];

app.use(express.json());
app.use("/api", router);
// app.get("/api/courses", (_req, res) => {
//   res.send(courses);
// });
// app.get("/api/courses/:id", (req, res) => {
//   const course = courses.find((c) => c.id === parseInt(req.params.id));

//   if (!course)
//     res.status(404).send(`ther is no course with id ${req.params.id}`);
//   res.send(course);
// });

// app.post("/api/courses", (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const result = schema.parse(req.body);
//     const course: Course = {
//       id: courses.length + 1,
//       name: result.name,
//     };
//     courses.push(course);

//     res.send(course);
//     next();
//   } catch (error) {
//     if (error instanceof ZodError) {
//       console.log(error.errors);
//       const errorMessages = error.errors.map((issue: any) => ({
//         message: `${issue.path.join(".")} is ${issue.message}`,
//       }));
//       res.status(400).json({ error: "Invalid data", details: errorMessages });
//     } else {
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   }
// });

// app.put(
//   "/api/courses/:id",
//   (req: Request, res: Response, next: NextFunction) => {
//     try {
//       let course = courses.find((c) => c.id === parseInt(req.params.id));
//       if (!course)
//         res.status(404).send(`course with id ${req.params.id} is not found!`);

//       // update the course and send it to the client
//       const result = schema.parse(req.body);
//       course.name = result.name;
//       res.send(course);
//       next();
//     } catch (err) {
//       if (err instanceof ZodError) {
//         const errorMessages = err.errors.map((issue: any) => ({
//           message: `${issue.path.join(".")} is ${issue.message}`,
//         }));
//         res.status(400).json({ error: "Invalid data", details: errorMessages });
//       } else {
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     }
//   }
// );

// app.delete(
//   "/api/courses/:id",
//   (req: Request, res: Response, next: NextFunction) => {
//     let course = courses.find((c) => c.id === parseInt(req.params.id));
//     if (!course)
//       res.status(404).send(`course with id ${req.params.id} is not found!`);

//     let index = courses.indexOf(course);
//     courses.splice(index, 1);

//     res.send(course);
//     next();
//   }
// );
app.listen(port, () => {
  console.log(`server is started at port ${port}`);
});
