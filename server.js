const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("home.html", { root: __dirname });
});

app.get("/thoughts", (req, res) => {
  res.sendFile("thoughts.html", { root: __dirname });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
