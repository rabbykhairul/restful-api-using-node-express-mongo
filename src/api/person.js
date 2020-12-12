const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("You have requested a person!!!");
});

router.get("/:name", (req, res) => {
  const personName = req.params.name;
  res.send(`You have requested a person who is named as ${personName}`);
});

module.exports = router;
