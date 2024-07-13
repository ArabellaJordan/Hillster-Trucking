import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`listening on port ${port}.`);
  console.log(__dirname);
});
