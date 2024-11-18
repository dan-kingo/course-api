import express from "express";
import router from "./routes/courseRouter";
import cors from "cors";
import morgan from "morgan";
import debug from "debug"
import path, { dirname } from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import mongoose from 'mongoose'
import Course from "./models/courses";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbDebug = debug("app:db");
const appDebug = debug("app:startup");

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "logs", "access.log"),
  {
    flags: "a",
  }
);

// conecting to db
mongoose.connect('mongodb://localhost/playground').then(() => {dbDebug('connected to db')}).catch((err) => {dbDebug(err)})


const course = new Course({
  name: 'ASP.Net Course',
  author: 'jack sparrow',
  price: 22,
  isPublished: true,
  tags: ['C#', 'backend'],
})

const createCourse = async () => {
  const result = await course.save()
  dbDebug(result)
}

// get courses 


const getCourses = async () => {
  const courses = await Course.find({name: /.*net.*/i})
                              .select({name: 1, tags: 1, author: 1})
                              .sort({name: 1})
                              .limit(10)
  dbDebug(courses)
}

//update directly
const updateCourse = async (id:string) => {
  const result = await Course.findByIdAndUpdate(id, {
    $set: {
      name: 'React.js Course',
      price: 30,
      author: 'Dagmaros'
    }
  }, {new: true})
  dbDebug(result)
}

// removing a document 

const removeCourse = async (id:string) => {
  const result = await Course.findByIdAndDelete(id, {new: true})
  dbDebug(result)
}
// createCourse()



app.use(express.json());
app.use(cors());
app.use(morgan("combined", { stream: accessLogStream }));

app.use("/api", router);
app.listen(port, () => {
  appDebug(`server is started at port ${port}`);
});
