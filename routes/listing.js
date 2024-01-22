const express = require("express");
const router = express.Router();
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const wrapAsync = require("../utils/wrapasync.js");
const listingController = require("../controllers/listings.js");

const multer  = require('multer');
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage });


// ("/") requests
router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,upload.single("listing[image]"), validateListing, wrapAsync(listingController.create));

//new Route
router.get("/new", isLoggedIn, listingController.new );

//("/:id") requests
router 
    .route("/:id")
    .get(wrapAsync(listingController.show))
    .put( isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingController.update))
    .delete( isLoggedIn, isOwner, wrapAsync(listingController.destroy));

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.edit));

module.exports = router;