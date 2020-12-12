const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const path = require("path");

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
  next();
});

app.use(express.static("public"));
app.use("/api/person", require("./api/person"));
app.use("/api/customer", require("./api/customer"));

// Handler for unregistered routes - 404 error
app.use((req, res, next) => {
  res.status(404).send("We think you are lost!");
});

// Handler for internal error - 500 error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, "../public/500.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
