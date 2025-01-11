import React from "react";
import FileUpload from "../components/FileUpload";
import FileList from "../components/FileList";

const Home = () => {
    return (
        <div>
            <h1>File Upload and Comment System</h1>
            <FileUpload />
            <FileList />
        </div>
    );
};

export default Home;
