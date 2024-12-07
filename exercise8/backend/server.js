const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Fake database
const dataPath = path.join(__dirname, "./data/database.json");

// Helper funcs
const readData = () => JSON.parse(fs.readFileSync(dataPath, "utf8"));
const writeData = data =>
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

// CRUD for courses, better to move to separate files later
app.get("/api/courses", (req, res) => {
  const data = readData();
  res.json(data.courses);
});

app.get("/api/courses/:id", (req, res) => {
  const data = readData();
  const id = Number(req.params.id);
  const course = data.courses.find(course => course.id === id);

  if (!course) {
    res.status(404).send("Course not found");
  }

  res.json(course);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
