const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require("passport");
const { saveRedirectUrl} = require("../middleware.js");
const userController = require("../controllers/users.js")

// create - signup 
router.get("/signup",userController.createSignUp)
// create signup - posting 
router.post("/signup",wrapAsync(userController.postSignUp))
//create login
router.get("/login",userController.createLogin);
//create - login - posting
router.post("/login", saveRedirectUrl,passport.authenticate("local", {failureRedirect: "/login",failureFlash: true,}),userController.postLogin);
//logout
router.get("/logout",userController.logOut);

module.exports = router;