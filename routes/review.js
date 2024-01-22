const express = require("express");
const router = express.Router({mergeParams:true});

const wrapAsync = require("../utils/wrapasync.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/review.js");

//REVIEWS
//POST ROUTE
router.post("/", isLoggedIn, validateReview,wrapAsync(reviewController.createReview));

//DELETE REVIEW_route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
