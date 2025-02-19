import React from "react";
import FileUpload from "../components/FileUpload";
import FileList from "../components/FileList";
import ForgeViewer from "../components/ForgeViewer";
import RevitFileList from "../components/RevitFileList";

const Home = () => {
    return (
        <div>
            {/* <h1>File Upload and Comment System</h1>
            <FileList /> */}
            <ForgeViewer/>
            <RevitFileList/>
        </div>
    );
};

export default Home;
