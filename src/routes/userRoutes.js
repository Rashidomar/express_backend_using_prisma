const router  = require("express").Router()
const userController = require("../controllers/userController")


router.get("/login", userController.login)

module.exports = router;