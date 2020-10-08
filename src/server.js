const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());

app.get("/", (request, response) => {
  /* response.sendFile(path.join(__dirname, "views", "main.html")); */

  const name = "Gabriel";
  response.render("main", { name });
});

app.listen(port, () => {
  console.log(`Web server up and running on port ${port}`);
});
