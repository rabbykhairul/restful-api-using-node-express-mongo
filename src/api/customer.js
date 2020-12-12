const CustomerModel = require("../models/customerModel");
const express = require("express");
const { model } = require("mongoose");
const router = express.Router();

// create a new customer
router.post("/", (req, res) => {
  // send error if no data is provided in request to create a new customer
  if (Object.keys(req.body).length === 0)
    return res.status(400).send("Bad request: Request body is missing!");

  const model = new CustomerModel(req.body);
  model
    .save()
    .then((doc) => {
      if (!doc || doc.length === 0) return res.status(500).send(doc);
      res.status(201).send(doc);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
