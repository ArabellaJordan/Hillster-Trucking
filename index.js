import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import $ from 'jquery';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended:true }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.post("/verify-login", (req, res) => {
  // console.log(req.body);
  res.sendFile(__dirname + "/public/Tracking.html");
});

app.listen(port, () => {
  console.log(`listening on port ${port}.`);
  console.log(__dirname);
});
