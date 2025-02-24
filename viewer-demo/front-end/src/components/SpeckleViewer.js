import { useEffect, useRef } from "react";
import { Viewer } from "@speckle/viewer";
import axios from "axios";

const SpeckleViewer = ({ streamId, objectId }) => {
  const viewerRef = useRef();

  useEffect(() => {
    const loadSpecificModel = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/streams/${streamId}/objects/${objectId}`
        );

        if (!response.data) {
          console.error("No model data received from the backend.");
          return;
        }
        const speckleViewer = new Viewer(viewerRef.current);
        await speckleViewer.loadObject(response.data);

        console.log("Model loaded successfully!");
      } catch (error) {
        console.error("Error loading model:", error.response?.data || error.message);
      }
    };

    loadSpecificModel();
  }, [streamId, objectId]);

  return (
    <div
      ref={viewerRef}
      style={{ width: "100%", height: "80vh", border: "1px solid #ccc" }}
    />
  );
};

export default SpeckleViewer;
