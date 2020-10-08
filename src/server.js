const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "main.html"));
});

app.listen(port, () => {
  console.log(`Web server up and running on port ${port}`);
});
