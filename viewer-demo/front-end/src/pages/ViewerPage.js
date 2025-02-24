import React from "react";
import { useParams } from "react-router-dom";
import SpeckleViewer from "../components/SpeckleViewer"; 

const ViewerPage = () => {
  const { streamId, objectId } = useParams();

  return (
    <div>
      <h1>3D Model Viewer</h1>
      <SpeckleViewer streamId={streamId} objectId={objectId} />
    </div>
  );
};


export default ViewerPage;
