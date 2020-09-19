const router = require("express").Router();
let detail = require("../models/detail.model");
// let User = require('../models/detail.model');

router.route("/").get((req, res) => {
  detail
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const qualification = req.body.qualification;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  const newUser = new detail({
    username,
    email,
    qualification,
    age,
    gender,
  });

  newUser
    .save()
    .then(() => res.json("detail added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  detail
    .findById(req.params.id)
    .then((detail) => res.json(detail))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  detail
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("detail deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  detail
    .findById(req.params.id)
    .then((detail) => {
      detail.username = req.body.username;
      detail.email = req.body.email;
      detail.qualification = req.body.qualification;
      detail.age = Number(req.body.age);
      detail.gender = req.body.gender;
    

      detail
        .save()
        .then(() => res.json("details updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
