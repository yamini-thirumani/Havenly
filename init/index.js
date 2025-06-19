const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"
main()
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log(err));
async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async() =>{
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj)=>({
        ...obj, 
        owner : "6814eda8912bf32c39689254",
    }))
    await Listing.insertMany(initdata.data);
    console.log("Data is Initialized");
}

initDB();
