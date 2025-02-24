const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:3000" })); // Allow frontend requests
app.use(express.json());

const speckleServerUrl = "https://speckle.xyz";
const accessToken = "03736fd20bad52078a71c38767823dd772e2310bc9";

// Route to fetch all streams from Speckle
app.get("/streams", async (req, res) => {
  try {
    const response = await axios.post(
      `${speckleServerUrl}/graphql`,
      {
        query: `
          query {
            streams(limit: 10) {
              totalCount
              items {
                id
                name
                description
              }
            }
          }
        `,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.json(response.data.data.streams.items);
  } catch (error) {
    console.error("Error fetching streams:", error.response?.data || error.message);
    res.status(500).json({ message: "Failed to fetch streams." });
  }
});

app.get("/streams/:streamId/latest-object", async (req, res) => {
  const { streamId } = req.params;

app.get("/streams/:streamId/objects/:objectId", async (req, res) => {
    const { streamId, objectId } = req.params;
  
    try {
      const objectResponse = await axios.get(
        `${speckleServerUrl}/streams/${streamId}/objects/${objectId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
  
      res.json(objectResponse.data);
    } catch (error) {
      console.error("Error fetching object:", error.response?.data || error.message);
      res.status(500).json({ message: "Failed to fetch the object." });
    }
  });
  


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
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const latestCommit = response.data.data.stream.commits.items[0];
    const objectId = latestCommit.referencedObject;

    const objectResponse = await axios.get(
      `${speckleServerUrl}/streams/${streamId}/objects/${objectId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    res.json(objectResponse.data);
  } catch (error) {
    console.error("Error fetching latest object:", error.response?.data || error.message);
    res.status(500).json({ message: "Failed to fetch the latest object." });
  }
});

// Route to verify if the server is running
app.get("/", (req, res) => {
  res.send("Speckle 3D Viewer Backend is running 🚀");
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
