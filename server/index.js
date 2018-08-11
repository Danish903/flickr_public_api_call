const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "..", "build");
const PORT = process.env.PORT || 4444;

app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log("server is up at port 4444");
});
