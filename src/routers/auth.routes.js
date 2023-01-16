const router = require("express").Router()
const {login , register} = require("../controllers/auth.controller")
const authValidations = require("../middlewares/validations/auth.validations")

router.post("/login" , login)
router.post("/register" , authValidations.register , register)


module.exports = router