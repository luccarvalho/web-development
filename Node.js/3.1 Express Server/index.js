import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Successful Access!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me.</h1><p>My name Lucas Carvalho</p>");
});

app.use((req, res) => {
  res.status(404).send("<h1>Page not found.</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
