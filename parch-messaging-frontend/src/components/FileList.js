import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentSection from "./CommentSection";

const FileList = () => {
    const [files, setFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null); 
    const [fileToUpload, setFileToUpload] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");

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

    const handleFileChange = (e) => {
        setFileToUpload(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!fileToUpload) {
            setUploadStatus("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append("name", fileToUpload.name);
        formData.append("file", fileToUpload);

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/files/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setUploadStatus("File uploaded successfully!");
            setFiles((prevFiles) => [...prevFiles, response.data]);
        } catch (error) {
            console.error("Failed to upload file:", error);
            setUploadStatus("Failed to upload file.");
        }
    };

    const handleFileClick = (file) => {
        console.log(file.url)
        if (file && file.url) {
            setSelectedFile(file); 
        } else {
            console.error("Invalid file selected:", file);
        }
    };

    return (
        <div>
            <h3>Uploaded Files</h3>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleFileUpload}>Upload File</button>
                {uploadStatus && <p>{uploadStatus}</p>}
            </div>

            <ul>
                {files.map((file) => (
                    <li key={file.id} onClick={() => handleFileClick(file)}>
                        {file.name}
                    </li>
                ))}
            </ul>
            {selectedFile && selectedFile.url.endsWith(".pdf") ? (
                <iframe
                    src={selectedFile.url}
                    title="PDF Viewer"
                    width="100%"
                    height="600px"
                    style={{ border: "none" }}
                />
            ) : selectedFile && selectedFile.url.match(/\.(jpeg|jpg|png|gif)$/) ? (
                <img
                    src={selectedFile.url}
                    alt={selectedFile.name}
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            ) : selectedFile ? (
                <p>Cannot preview this file type. Please download to view.</p>
            ) : null}


            {selectedFile && <CommentSection fileId={selectedFile.id} />}
        </div>
    );
};

export default FileList;
