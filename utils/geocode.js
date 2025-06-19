// utils/geocode.js
const axios = require("axios");

const geocodeLocation = async (location) => {
  const apiKey = "pk.86b9f7091dc4b6b6a15372d5e69e10c3"; 
  const url = `https://us1.locationiq.com/v1/search.php`;

  try {
    const response = await axios.get(url, {
      params: {
        key: apiKey,
        q: location,
        format: "json"
      }
    });

    const data = response.data[0];
    return {
      latitude: parseFloat(data.lat),
      longitude: parseFloat(data.lon)
    };
  } catch (err) {
    console.error("Geocoding failed:", err.message);
    throw new Error("Invalid location entered.");
  }
};

module.exports = geocodeLocation;
