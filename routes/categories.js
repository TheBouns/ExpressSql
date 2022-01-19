const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

const categoriesController = require("../controller/categoriesController");
router.get("/create", categoriesController.create);
router.post("/add",categoriesController.add);
router.get("/", categoriesController.show);
router.put("/update:id", categoriesController.update);
router.get("/search/:id", categoriesController.searchById);



module.exports = router;