const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("<h1>Heladsflo browser</h1>");
});

app.listen(port, () => {
  console.log(`Web server up and running on port ${port}`);
});
