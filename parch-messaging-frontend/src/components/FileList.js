import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentSection from "./CommentSection";

const FileList = () => {
    const [files, setFiles] = useState([]);
    const [selectedFileId, setSelectedFileId] = useState(null);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/files/");
                setFiles(response.data);
            } catch (error) {
                console.error("Failed to fetch files:", error);
            }
        };

        fetchFiles();
    }, []);

    return (
        <div>
            <h3>Uploaded Files</h3>
            <ul>
                {files.map((file) => (
                    <li key={file.id} onClick={() => setSelectedFileId(file.id)}>
                        {file.name}
                    </li>
                ))}
            </ul>
            {selectedFileId && <CommentSection fileId={selectedFileId} />}
        </div>
    );
};

export default FileList;
