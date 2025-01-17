import React, { useState } from "react";
import axios from "axios";

const FileUpload = ({ onUpload }) => {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return alert("Please select a file.");

        const formData = new FormData();
        formData.append("name", file.name);
        formData.append("file", file);

        try {
            console.log("enter")
            const response = await axios.post("http://127.0.0.1:8000/api/files/", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("rahil")
            setUploadStatus("File uploaded successfully!");
            onUpload(response.data);
        } catch (error) {
            setUploadStatus("Failed to upload file.");
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <p>{uploadStatus}</p>
        </div>
    );
};

export default FileUpload;
