if(process.env.NODE_ENV != "production"){
   require("dotenv").config(); 
}

const express = require("express");
const app = express();
const mongoose =require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const multer  = require('multer');


app.set("view engine","ejs");//for access to views folder
app.set("views", path.join(__dirname,"views"));//join the path of views
app.use(express.urlencoded({extended:true}));//for POST requests to get body params
app.use(methodOverride("_method"));//forms delete/patch,put requests.
app.engine('ejs', ejsMate);//boilerplate
app.use(express.static(path.join(__dirname,"/public")));//styling n javascript logic

const listingRouter = require("./routes/listing.js"); 
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");


// //Connecting MONGODB

const dbUrl = process.env.ATLASDB_URL;
main().then(()=>{
    console.log("Connected to DB")
}).catch((err)=>{console.log(err)});

async function main() {
    await mongoose.connect(dbUrl);
}

//Session Options Function
const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto:{
        secret: process.env.SECRET
    },
    touchAfter: 24 * 3600,
});

const sessionOptions = {
    store: store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};
store.on("error",()=>{
    console.log("ERROR IN MONGO SESSION STORE",err);
})


//session&flash
app.use(session(sessionOptions));//express-session 
app.use(flash()); //connect -flash

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));//via local strategy login/signup

passport.serializeUser(User.serializeUser());//static methods/serialize sers into session.
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

//goes to routes
app.use("/listings",listingRouter);//for router-listing
app.use("/listings/:id/reviews",reviewRouter);//router-review
app.use("/",userRouter);


//All_Routes
app.get("/",(req,res)=>{
    res.redirect("/listings");
})
app.all("*",(req,res,next) => {
    next(new ExpressError(404,"Page Not Found!"));
})

//Error_Handler
app.use((err,req,res,next)=>{
    let {statusCode=500, message="Something Went Wrong!"} = err;
    res.status(statusCode).render("error.ejs",{message});
    // res.status(statusCode).send(message);
})

app.listen(8080,()=>{
    console.log("Server is Listening to port 8080");
})