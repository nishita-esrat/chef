const express = require("express");
const cors = require("cors");
let app = express();
const data = require("./data.json");

app.use(express.json());
app.use(cors());
// for checking sever is running or not
app.get("/health", (_req, res) => {
  res.json({ msg: "server is running" });
});
// for getting all chef data
app.get("/all_chef", (_req, res) => {
  res.send(data);
});
// for getting single chef data depend on chef id
app.get("/all_chef/:chefId", (req, res) => {
  const chefId = parseInt(req.params.chefId);
  const result = data.find((item) => item.chefId == chefId);
  res.send(result);
});
// for getting favourite chef item
app.post("/all_fav_item", (req, res) => {
  const storageFavItems = req.body;
  let favItems = [];
  for (const id in storageFavItems) {
    data.map((item) => {
      item.recipes.find((item) => {
        if (item.recipeId == id) {
          favItems.push(item);
          return;
        }
      });
    });
  }
  res.send(favItems);
});

app.listen(800, () => {
  console.log("server is running on port 800");
});
