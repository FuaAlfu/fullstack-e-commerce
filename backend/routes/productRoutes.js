const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

//get all product from db
router.get("/", getProducts);

//get a product by id from db
router.get("/:id", getProductById);

module.exports = router;