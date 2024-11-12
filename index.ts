import express from "express";
const app = express();
const port = process.env.PORT || 3000;
const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
];
app.get("/api/courses", (_req, res) => {
  res.send(courses);
});
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course)
    res.status(404).send(`ther is no course with id ${req.params.id}`);
  res.send(course);
});

app.listen(port, () => {
  console.log(`server is started at port ${port}`);
});
