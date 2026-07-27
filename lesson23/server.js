const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const port = 3000;

const users = [
  {
    id: 1,
    name: "Viktor",
  },
  {
    id: 2,
    name: "Viktoria",
  },
];

app.get("/", (req, res) => {
  res.sendFile("public/client.html", { root: __dirname });
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const newUser = { ...req.body };
  users.push(newUser);

  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = +req.params.id;

  const user = users.find((user) => user.id === id);

  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
