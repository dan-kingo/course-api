import express from "express";
import router from "./routes/courseRouter";
import cors from "cors";
import morgan from "morgan";
import path, { dirname } from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "logs", "access.log"),
  {
    flags: "a",
  }
);

app.use(express.json());
app.use(cors());
app.use(morgan("combined", { stream: accessLogStream }));

app.use("/api", router);
app.listen(port, () => {
  console.log(`server is started at port ${port}`);
});
