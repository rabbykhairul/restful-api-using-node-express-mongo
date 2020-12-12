const express = require("express");
const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.use("/api/person", require("./api/person"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
