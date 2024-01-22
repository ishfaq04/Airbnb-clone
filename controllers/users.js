const User = require("../models/user");

module.exports.renderSignup = (req,res) =>{
    res.render("users/signup.ejs");
}

module.exports.signup = async(req,res) => {
    try{
    let {username, usertype, email, password} = req.body;
    const newUser = new User({usertype,email,username});

    const registeredUser = await User.register(newUser,password);

    req.login(registeredUser, (err) => {
        if(err){
            return next(err);
        }
        req.flash("success","Welcome to Compass you are logged in");
        res.redirect("/listings");
    })
    } catch(e) {
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLogin = (req,res) => {
    res.render("users/login.ejs");
}

module.exports.postLogin = async(req,res) => {
    req.flash("success","welcome to compass you are logged in");
    let redirectUrl = res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl);
}

module.exports.logout = (req,res) => {
    req.logout((err) => {
        if(err){
           return  next(err);
        }
        req.flash("success","You are Logged out!");
        res.redirect("/listings");
    })
}