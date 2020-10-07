const express = require("express");
const path = require("path");
const https = require("https");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "main.html"));
});

app.get("/repos", (request, response) => {
  const url = "https://api.kanye.rest/";

  https.get(url, (res) => {
    console.log(res.statusCode);

    res.on("data", (data) => {
      const repos = JSON.parse(data);
      console.log(repos);
    });
  });

  response.send("Funcionou");
});

app.listen(port, () => {
  console.log(`Web server up and running on port ${port}`);
});
