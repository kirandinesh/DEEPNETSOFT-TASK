const express = require("express");
const router = express.Router();
const {
  getAllMenus,

  createMenu,
  addItemToMenu,
} = require("../../controllers/menu/menu-controllers");

router.get("/", getAllMenus);
router.post("/", createMenu);
router.post("/:id/items", addItemToMenu);

module.exports = router;
