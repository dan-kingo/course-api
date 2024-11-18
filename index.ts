import express from "express";
import router from "./routes/courseRouter";
import cors from "cors";
import morgan from "morgan";
import debug from "debug"
import path, { dirname } from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import mongoose from 'mongoose'

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

// create a schema 
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  tags: [String],
  date: {type: Date, default: Date.now},
})
// creating a model 
const Course = mongoose.model('Course', courseSchema)

const course = new Course({
  name: 'Node.js',
  author: 'Mosh',
  price: 10,
  isPublished: true,
  tags: ['node', 'backend'],
})

const createCourse = async () => {
  const result = await course.save()
  dbDebug(result)
}
createCourse()



app.use(express.json());
app.use(cors());
app.use(morgan("combined", { stream: accessLogStream }));

app.use("/api", router);
app.listen(port, () => {
  appDebug(`server is started at port ${port}`);
});
