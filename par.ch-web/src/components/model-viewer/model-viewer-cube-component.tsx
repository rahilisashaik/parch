import React, { useRef } from 'react';
import './model-viewer.css';

const ViewerCube = () => {
  const cubeWrapperRef = useRef(null);

  return (
    <div>
      <div className='right-container'>
        <div id='backToHome'><i className='fa fa-home'></i></div>
        <div id='orientCubeWrapper' ref={cubeWrapperRef}></div>
      </div>
      <div className='share-sidebar' id='shareSidebar'>
        <h1 className='sidebar-title'>Some content here!</h1>
      </div>
      <div className='loader' id='loader'>
        <div className='loader-text' id='loaderInfo'>Loading...</div>
        <div className='loader-spinner'></div>
      </div>
    </div>
  );
};

export default ViewerCube;