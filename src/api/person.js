const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.query.name)
    res.send(`You have requested a person who is named as ${req.query.name}`);
  else res.send("You have requested a person!!!");
});

router.get("/unknown", (req, res) => {
  throw new Error("This is a forced error!");
});

router.get("/:name", (req, res) => {
  const personName = req.params.name;
  res.send(`You have requested a person who is named as ${personName}`);
});

module.exports = router;
