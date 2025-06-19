const Listing = require("../models/listing");
const geocodeLocation = require("../utils/geocode.js");

module.exports.index = async (req, res) => {
    try {
      const { category, q } = req.query;
      let filter = {};
  
      if (!q) {
        if (category) {
          filter.category = category;
        }
        const allListings = await Listing.find(filter);
        return res.render("listings/index.ejs", { 
          allListings,
          searchQuery: '',
          category
        });
      }
  
      filter.$or = [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } }
      ];
      
      if (category) {
        filter.category = category;
      }
  
      const allListings = await Listing.find(filter);
      
      if (allListings.length === 0) {
        req.flash("error", `No listings found matching "${q}"`);
        return res.redirect("/listings");
      }
  
      res.render("listings/index.ejs", { 
        allListings,
        searchQuery: q,
        category
      });
    } catch (err) {
      
      req.flash("error", "Error searching listings");
      res.redirect("/listings");
    }
  };
  
module.exports.newListing = (req,res)=>{
    res.render("listings/new.ejs");
}
module.exports.createListing =  async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    const coords = await geocodeLocation(newListing.location);
    
    newListing.latitude = coords.latitude;
    newListing.longitude = coords.longitude;

    await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
}
module.exports.editListing = async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for doesn't exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing})
      
}
module.exports.updateListing = async(req,res)=>{
    
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing})
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url , filename};
    
    }
    const coords = await geocodeLocation(listing.location);
    listing.latitude = coords.latitude;
    listing.longitude = coords.longitude;

    await listing.save();
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
}
module.exports.showListing = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({path : "reviews",
        populate : {
            path : "author",
        },
    })
    .populate("owner");
    if(!listing){
        req.flash("error","Listing you requested for doesn't exist!");
        res.redirect("/listings");
    }
    else{
        res.render("listings/show.ejs",{listing});
    }
   
}
module.exports.deleteListing = async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
}


