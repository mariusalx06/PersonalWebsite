import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("tiny"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
  
});

app.get("/latest-projects", (req, res) => {
  res.render("latestprojects.ejs");
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});