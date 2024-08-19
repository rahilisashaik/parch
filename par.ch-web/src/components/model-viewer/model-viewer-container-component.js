import React from 'react';
import ModelViewer from './model-viewer-component.js';
import { useEffect } from 'react';
import './model-viewer.css';
import ViewerHeader from './model-viewer-header-component.tsx';
import ViewerCanvas from './model-viewer-canvas-component.tsx';
import ViewerControls from './model-viewer-interactivity-component.tsx';
import ViewerModelBrowser from './model-viewer-browser-component.tsx';
import ViewerShareSidebar from './model-viewer-sidebar-component.tsx';
import * as THREE from 'three';


const ViewerContainer = () => {
  useEffect(() => {
    const viewer = ModelViewer();
    viewer.loadModel('models/BLDG_BYATL-2088McKinleyRdADU_detached-3DView-FROMDRIVEWAY.glb');
  }, []);

  return (
    <div>
      <ViewerHeader />
      <ViewerCanvas />
      <ViewerControls />
      <ViewerModelBrowser />
      <ViewerShareSidebar />
    </div>
  );
};

export default ViewerContainer;