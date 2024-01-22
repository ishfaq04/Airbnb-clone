const express = require("express");
const router = express.Router({mergeParams:true});

const wrapAsync = require("../utils/wrapasync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/users");

//render Signup form
router.get("/signup",userController.renderSignup);

//Sign Up
router.post("/signup",wrapAsync(userController.signup));

//render login form
router.get("/login",userController.renderLogin);

//Login
router.post("/login", saveRedirectUrl, passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),
    userController.postLogin
);

//Logout
router.get("/logout",userController.logout);

module.exports = router;