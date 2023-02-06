const express = require("express");
const router = express.Router();
const {
  getAllUser,
  createUser,
  getOneUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");

router.get("/", getAllUser);
router.post("/", createUser);
router.get("/:id", getOneUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
