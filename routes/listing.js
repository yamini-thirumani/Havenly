const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js")
const upload = multer({storage});
const geocodeLocation = require("../utils/geocode");
router //Index Route and Create Route
.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,
    upload.single('listing[image]'),
    wrapAsync(listingController.createListing));

//New Route
router.get("/new",isLoggedIn,listingController.newListing);
//Edit Route
router.get("/:id/edit",isLoggedIn, isOwner,listingController.editListing)
  
router //Update Route and Show Route and Delete Route
.route("/:id")
.put(isLoggedIn,
     isOwner,
     upload.single('listing[image]'),
     validateListing,
     wrapAsync(listingController.updateListing))
.get(wrapAsync(listingController.showListing))
.delete(isLoggedIn,isOwner,listingController.deleteListing)

module.exports = router;
