const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

router.post("/create", recipeController.create);
router.get("/list", recipeController.list);
router.get("/get", recipeController.get);
router.post("/update", recipeController.update);
router.post("/delete", recipeController.remove);

module.exports = router;