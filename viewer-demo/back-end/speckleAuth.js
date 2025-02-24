const axios = require("axios");

const speckleServerUrl = process.env.SPECKLE_SERVER_URL;
const accessToken = "03736fd20bad52078a71c38767823dd772e2310bc9";

exports.getLatestStreamObject = async (req, res) => {
  const { streamId } = req.params;

  try {
    const response = await axios.post(
      `${speckleServerUrl}/graphql`,
      {
        query: `
          query {
            stream(id: "${streamId}") {
              commits(limit: 1) {
                items {
                  id
                  referencedObject
                  message
                }
              }
            }
          }
        `,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const latestCommit = response.data.data.stream.commits.items[0];
    const objectId = latestCommit.referencedObject;

    // Fetch the actual object
    const objectResponse = await axios.get(
      `${speckleServerUrl}/streams/${streamId}/objects/${objectId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    res.json(objectResponse.data);
  } catch (error) {
    console.error("Error fetching latest model:", error.response?.data || error.message);
    res.status(500).json({ message: "Failed to fetch the latest model." });
  }
};
