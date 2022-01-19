const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const productsController = require("../controller/productsController");


router.get("/productsTable",productsController.createTableProducts);
router.post("/add", productsController.addProduct);
router.put("/update/:id",productsController.update);
router.get("/", productsController.show);
router.get("/select/:id",productsController.selectById);
router.get("/orderDesc",productsController.orderDesc);
router.get("/:name",productsController.productName);
router.delete("/delete/:id", productsController.delete)


module.exports = router;
