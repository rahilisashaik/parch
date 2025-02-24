const axios = require("axios");
require("dotenv").config(); // Load environment variables from .env

const getForgeToken = async () => {
  try {
    const response = await axios.post(
      "https://developer.api.autodesk.com/authentication/v2/token",
      new URLSearchParams({
        client_id: "itPbEK3OMlxz45fxNucwxrSBUGgd9u9SFEQp7bKqiX4cri1J",
        client_secret: "W6y22JhKnIIAI2AAaPGoZIrF42wYLjM0LYYNGTfLczUE9al1Zq1zWGbDDRkZi0N4",
        grant_type: "client_credentials",
        scope: "data:read data:write data:create bucket:read bucket:create",
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    console.log("Access Token Generated:", response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching Autodesk Forge token:", error.response.data);
    return null;
  }
};

module.exports = { getForgeToken };
