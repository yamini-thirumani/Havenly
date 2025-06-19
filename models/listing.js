const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./review.js");
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: String,
        url: String
    },
    price: Number,
    location: String,
    country: String,
    latitude: Number,        
  longitude: Number,
    tax: {
        type: Number,
        default: function() {
            return this.price * 0.1; 
        }
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    category: {
        type: String,
        enum: ['Beachfront', 'City', 'Mountain', 'Countryside', 'Historic', 'Luxury', 
               'Nature', 'Islands', 'Skiing', 'Tropical', 'Desert', 'Lake'],
        required: true
    }
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;