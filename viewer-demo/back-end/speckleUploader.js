const axios = require("axios");

const uploadToSpeckle = async (fileData, fileName) => {
  const speckleToken = "deb35d259e114aa21ae564acf073583a4fc3c9ebe8";
  const speckleStreamId = "af3c9d031e";

  try {
    const response = await axios.post(
      `https://speckle.xyz/streams/${speckleStreamId}/objects`,
      {
        data: fileData, // Upload binary data
        name: fileName,
      },
      {
        headers: {
          Authorization: `Bearer ${speckleToken}`,
          "Content-Type": "application/octet-stream",
        },
      }
    );

    console.log("Model uploaded to Speckle:", response.data);
  } catch (error) {
    console.error("Error uploading model to Speckle:", error.response.data);
  }
};

module.exports = { uploadToSpeckle };
