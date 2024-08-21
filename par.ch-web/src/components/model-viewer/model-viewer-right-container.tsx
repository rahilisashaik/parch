import React, { useRef, useEffect } from 'react';
import './model-viewer.css';
import * as THREE from 'three';
import { show, hide } from './model-viewer-util.ts';


const ViewerRightContainer = () => {
  const loader = useRef<HTMLDivElement>(null);
  const cubeWrapper = useRef<HTMLDivElement>(null);
  
	let cubeScene = new THREE.Scene();
	let cubeCamera = new THREE.PerspectiveCamera(70, cubeWrapper.offsetWidth / cubeWrapper.offsetHeight, 0.1, 100);
  let cubeRenderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    preserveDrawingBuffer: true
  });

  useEffect(() => {
    if (cubeWrapper.current) {
      const cubeWrapperRef = cubeWrapper.current;
      const offsetWidth = cubeWrapperRef.offsetWidth;
      const offsetHeight = cubeWrapperRef.offsetHeight;
      let cubeCameraDistance = 1.75;

      let cubeScene = new THREE.Scene();
      let cubeCamera = new THREE.PerspectiveCamera(70, offsetWidth / offsetHeight, 0.1, 100);


      cubeRenderer.setSize(offsetWidth, offsetHeight);
      cubeRenderer.setPixelRatio(window.devicePixelRatio);

      cubeWrapperRef.appendChild(cubeRenderer.domElement);
    }
  }, []);

  const renderCube = () => {
    if (cubeWrapper.current) {
      const cubeWrapperRef = cubeWrapper.current;
      // renderAll();
      cubeRenderer.render(cubeScene, cubeCamera);
    }
  }

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

  useEffect(() => {hideLoader();}, []);

  useEffect(() => {renderCube();}, []);

  const showCube = () => {
    if (cubeWrapper.current) {
      const cubeWrapperRef = cubeWrapper.current;
      show(cubeWrapperRef);
    }
  }

  const hideCube = () => {  
    if (cubeWrapper.current) {
      const cubeWrapperRef = cubeWrapper.current;
      hide(cubeWrapperRef);
    }
  }
  
  return (
    <div>
        <div className='right-container'>
	            <div id='backToHome'><i className='fa fa-home'></i></div>
	            <div id='orientCubeWrapper' ref={cubeWrapper}>Cube</div>
        </div>
      <div className='loader' id='loader' ref={loader}>
        <div className='loader-text' id='loaderInfo'>Loading...</div>
        <div className='loader-spinner'></div>
      </div>
    </div>
  );
};

export default ViewerRightContainer;