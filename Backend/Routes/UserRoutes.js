const router=require("express").Router()

const {UserSignup,Signin,changepassword}=require('../Controller/UserController')


router.post("/signup",UserSignup)
router.post("/signin",Signin)
router.post("/changepassword",changepassword)

module.exports=router