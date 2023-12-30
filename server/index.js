const express = require("express");
const cors = require("cors");
let app = express();
const data = require("./data.json");

app.use(cors());

app.get("/health", (_req, res) => {
  res.json({ msg: "server is running" });
});

app.get("/all_chef", (_req, res) => {
  res.send(data);
});

app.listen(800, () => {
  console.log("server is running on port 800");
});
