import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send("hellow!");
});
app.listen(port, () => {
  console.log(`server is started at port ${port}`);
});
