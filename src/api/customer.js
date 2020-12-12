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

// return customer infos or info about a single customer if specified in queryString
router.get("/", (req, res) => {
  if (req.query.email)
    return CustomerModel.findOne({ email: req.query.email })
      .then((doc) => res.status(200).json(doc))
      .catch((err) => res.status(500).json(err));

  CustomerModel.find()
    .then((docs) => res.status(200).json(docs))
    .catch((err) => res.status(500).json(err));
});

// update a customer info if specified in queryString
router.put("/", (req, res) => {
  if (!req.query.email)
    return res
      .status(400)
      .send("Bad request: Missing email queryString for update operation");

  CustomerModel.findOneAndUpdate({ email: req.query.email }, req.query, {
    new: true,
  })
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(500).json(err));
});

// delete a customer from database
router.delete("/", (req, res) => {
  if (!req.query.email) return res.status(400).send("Missing URL query: email");

  CustomerModel.findOneAndDelete({ email: req.query.email })
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
