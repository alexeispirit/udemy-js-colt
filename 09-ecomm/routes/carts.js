const express = require("express");

const router = express.Router();

router.post("/cart/products", (req, res) => {
  res.send("product added");
});

module.exports = router;
