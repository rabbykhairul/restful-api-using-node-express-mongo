const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("You have requested a person!!!");
});

module.exports = router;
