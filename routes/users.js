const express = require("express");
const { route } = require("express/lib/application");
const userController = require("../controller/usersController");
const router = express.Router();

router.get("/create", userController.create);
router.post("/add", userController.add);
router.get("/", userController.show);
router.get("/get/:id", userController.search);
router.delete("delete", userController.delete);
router.put("/update/:id", userController.updateName);
router.get("/orders/", userController.orders);






module.exports = router;

