import React from 'react';
import ModelViewer from './model-viewer-component.js';
import { useEffect } from 'react';
import './model-viewer.css';
import ViewerHeader from './model-viewer-header-component.tsx';
import ViewerCanvas from './model-viewer-canvas-component.tsx';
import ViewerControls from './model-viewer-interactivity-component.tsx';
import ViewerModelBrowser from './model-viewer-browser-component.tsx';
import ViewerShareSidebar from './model-viewer-sidebar-component.tsx';
import ViewerCube from './model-viewer-cube-component.tsx';


const ViewerContainer = () => {
  // useEffect(() => {
  //   const viewer = ModelViewer();
  //   viewer.loadModel('models/BLDG_BYATL-2088McKinleyRdADU_detached-3DView-FROMDRIVEWAY.glb');
  // }, []);

  return (
    <div>

      <html>
      <head>
        <title>Parch Visualizer</title>
        <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
        <link rel='stylesheet' type='text/css' href='viewer.css'/>
        {/* <!-- <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"> --> */}
        <script src="https://kit.fontawesome.com/daa834e337.js" crossOrigin="anonymous"></script>
        <style></style>
        </head>
      </html>

      <ViewerHeader />
      <ViewerCanvas />
      <ViewerControls />
      <ViewerModelBrowser />
      <ViewerShareSidebar />
      <ViewerCube />

      <script src='vendor/three.min.js'></script>
      <script src='vendor/OrbitControls.js'></script>
      <script src='vendor/GLTFLoader.js'></script>
      <script src='viewer.js'></script>
    </div>
  );
};

export default ViewerContainer;