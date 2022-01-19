const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

const orderController = require("../controller/ordersController");

router.get("/create", orderController.createTable);
router.get("/", orderController.show);
router.post("/add", orderController.add);





module.exports = router;
