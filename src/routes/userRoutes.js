const router  = require("express").Router()
const userController = require("../controllers/userController")
const {verifyToken} = require("../middleware/auth")


router.post("/login", userController.login)

router.post("/signup", userController.signup)

router.get("/verifyToken", verifyToken)


module.exports = router;