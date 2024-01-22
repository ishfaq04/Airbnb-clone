const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs",{allListings});
    }

module.exports.new = (req,res) => {
    if(req.user.usertype === "visitor"){
        req.flash("error","You have signed-up as visitor!");
        return res.redirect("/listings");
    }
    
    res.render("./listings/new.ejs");
}

module.exports.show = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews",populate:{path: "author"}}).populate("owner");
    if(!listing){
        req.flash("error","Requested Listing Does Not Exist!");
        return res.redirect("/listings");
    }
    res.render("./listings/show.ejs",{listing});
    }

module.exports.create = async(req,res)=>{
        if(req.user.usertype === "visitor"){
            req.flash("error","Listing not Created,You have signed-up as visitor!");
            return res.redirect("/listings");
        }
        let response = await geocodingClient.forwardGeocode({
            query: req.body.listing.location,
            limit: 1,
          }).send();

    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};

    newListing.geometry = response.body.features[0].geometry;

    let saved = await newListing.save();

    req.flash("success","New Listing Created!");
    res.redirect("/listings");
}

module.exports.edit = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing Does Not Exist!");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/h_150,w_100");

    res.render("./listings/edit.ejs",{ listing, originalImageUrl });
 };

module.exports.update = async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url,filename};
        await listing.save();
    }
    

    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
    }

module.exports.destroy = async(req,res)=>{
    let {id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
    }

