const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const config = require("../config");
let refreshTokens = [];

router.get("/", (req, res) => {
  res.redirect("home");
});

router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/admin", (req, res) => {
  res.render("admin");
});

router.post("/login", (req, res) => {
  
});

module.exports = router;
