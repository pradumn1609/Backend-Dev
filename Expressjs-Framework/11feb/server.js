const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true })); // to read form data

app.set("view engine", "ejs");

const students = [
  { id: 1, name: "raj", branch: "CSE" },
  { id: 2, name: "Ajay", branch: "ECE" },
  { id: 3, name: "Yash", branch: "IT" },
];

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/students/register", (req, res) => {
  console.log("form/data", req.body);
  res.send("Student Registered");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});