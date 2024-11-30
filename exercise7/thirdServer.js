import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/result", (req, res) => {
  const { firstAnswer, secondAnswer, thirdAnswer } = req.body;
  res.render("result", { firstAnswer, secondAnswer, thirdAnswer });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
