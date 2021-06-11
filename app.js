const express = require("express");
const app = express();
const router = require("./route/router");
const config = require("./config");


app.use(express.static("js"));
app.use(express.static("js/control"));
app.use(express.static("js/page"));

// Set Views
app.set("views", "./views/pages");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use("/", router);

// Listen on port 3000
app.listen(config.server.port, () => {
  console.log(`Listening on port  ${config.server.port}`);
});
