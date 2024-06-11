import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "86567978",
  port: 5432,
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
