import React, { useRef, useEffect } from 'react';
import './model-viewer.css';
import * as THREE from 'three';
import { show, hide } from './model-viewer-util.ts';


const ViewerRightContainer = () => {
  const loader = useRef<HTMLDivElement>(null);
  const cubeWrapper = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (cubeWrapper.current) {
      const cubeWrapperRef = cubeWrapper.current;
      const offsetWidth = cubeWrapperRef.offsetWidth;
      const offsetHeight = cubeWrapperRef.offsetHeight;
      let cubeCameraDistance = 1.75;

      let cubeScene = new THREE.Scene();
      let cubeCamera = new THREE.PerspectiveCamera(70, offsetWidth / offsetHeight, 0.1, 100);
      let cubeRenderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true
      });

      cubeRenderer.setSize(offsetWidth, offsetHeight);
      cubeRenderer.setPixelRatio(window.devicePixelRatio);

      cubeWrapperRef.appendChild(cubeRenderer.domElement);
    }
  }, []);

  const showLoader = () => {
    if (loader.current) {
      const loaderRef = loader.current;
      show(loaderRef);
    }
  }

  const hideLoader = () => {
    if (loader.current) {
      const loaderRef = loader.current;
      hide(loaderRef);
    }
  } 

  const showCube = () => {
    if (cubeWrapper.current) {
      const cubeWrapperRef = cubeWrapper.current;
      show(cubeWrapperRef);
    }
  }
  useEffect(() => {hideLoader();}, []);
  useEffect(() => {showCube();}, []);

  return (
    <div>
      <div className='right-container'>
        <div id='backToHome'><i className='fa fa-home'></i></div>
        <div id='orientCubeWrapper' ref={cubeWrapper}></div>
      </div>
      <div className='share-sidebar' id='shareSidebar'>
        <h1 className='sidebar-title'>Some content here!</h1>
      </div>
      <div className='loader' id='loader' ref={loader}>
        <div className='loader-text' id='loaderInfo'>Loading...</div>
        <div className='loader-spinner'></div>
      </div>
    </div>
  );
};

export default ViewerRightContainer;