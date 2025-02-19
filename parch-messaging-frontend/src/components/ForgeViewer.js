import React, { useEffect, useState } from "react";

const ForgeViewer = ({ projectId, fileId }) => {
    const [urn, setUrn] = useState(null);

    useEffect(() => {
        if (!projectId || !fileId) return;

        const fetchUrn = async () => {
            try {
                const response = await fetch(
                    `http://127.0.0.1:8000/api/forge/file/${projectId}/${fileId}/`
                );
                const data = await response.json();
                if (data.urn) {
                    setUrn(data.urn);
                } else {
                    console.error("Failed to get URN:", data.error);
                }
            } catch (error) {
                console.error("Error fetching URN:", error);
            }
        };

        fetchUrn();
    }, [projectId, fileId]);

    useEffect(() => {
        if (!urn) return;

        const options = {
            env: "AutodeskProduction",
            getAccessToken: async (onTokenReady) => {
                const response = await fetch("http://127.0.0.1:8000/api/forge/auth/");
                const data = await response.json();
                onTokenReady(data.access_token, data.expires_in);
            }
        };

        window.Autodesk.Viewing.Initializer(options, () => {
            const viewerDiv = document.getElementById("forgeViewer");
            const viewer = new window.Autodesk.Viewing.GuiViewer3D(viewerDiv);
            viewer.start();

            const documentId = `urn:${urn}`;
            window.Autodesk.Viewing.Document.load(documentId, (doc) => {
                const viewables = doc.getRoot().search({ type: "geometry" });
                if (viewables.length > 0) {
                    viewer.loadDocumentNode(doc, viewables[0]);
                }
            });
        });

    }, [urn]);

    return <div id="forgeViewer" style={{ width: "100%", height: "600px" }}></div>;
};

export default ForgeViewer;
