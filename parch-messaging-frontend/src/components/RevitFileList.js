import React, { useState } from "react";
import ForgeViewer from "./ForgeViewer";

const RevitFileList = () => {
    const [projectId, setProjectId] = useState("");
    const [fileId, setFileId] = useState("");
    const [showViewer, setShowViewer] = useState(false);

    const handleViewClick = () => {
        if (projectId && fileId) {
            setShowViewer(true);
        } else {
            alert("Please enter both Project ID and File ID.");
        }
    };

    return (
        <div>
            <h3>View Autodesk Docs Files</h3>
            <input
                type="text"
                placeholder="Enter Project ID"
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter File ID"
                value={fileId}
                onChange={(e) => setFileId(e.target.value)}
            />
            <button onClick={handleViewClick}>View Model</button>

            {showViewer && <ForgeViewer projectId={projectId} fileId={fileId} />}
        </div>
    );
};

export default RevitFileList;
