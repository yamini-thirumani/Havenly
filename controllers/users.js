const Review = require("../models/review");
const Listing = require("../models/listing");
const User = require("../models/user")

module.exports.createSignUp = (req,res)=>{
    res.render("users/signup.ejs");
}
module.exports.postSignUp = async(req,res)=>{
    try{
        let {username , email, password} = req.body;
        const newUser = new User({username,email});
        const registerdUser = await User.register(newUser,password);
        console.log(registerdUser);
        req.login(registerdUser,(err)=>{
            if(err){
                return next(err);
             }
             req.flash("success","User Registered Successfully!");
             res.redirect("/listings");
        })
        
    }
    catch(err){
        req.flash("error",err.message);
        res.redirect("/signup");
    }
    
}

module.exports.createLogin = (req,res)=>{
    res.render("users/login.ejs");
}
module.exports.postLogin = async (req, res) => {
    req.flash("success", "Welcome back to Havenly!");

    const redirectUrl = res.locals.redirectUrl || "/listings";
    delete req.session.redirectUrl; 
    res.redirect(redirectUrl);
  }
module.exports.logOut = (req,res)=>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success","You are logged out now!");
        res.redirect("/listings")
    })
}