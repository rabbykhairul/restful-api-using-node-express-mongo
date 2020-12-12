const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`${Date.now().toString()} => ${req.originalUrl}`);
  next();
});

app.use(express.static("public"));
app.use("/api/person", require("./api/person"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
