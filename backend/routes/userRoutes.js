const express = require("express");
const { userRegister, authUser} = require("../controllers/userControllers");

const router = express.Router();

router.route("/").post(userRegister);
router.post("/login", authUser)

module.exports = router;
