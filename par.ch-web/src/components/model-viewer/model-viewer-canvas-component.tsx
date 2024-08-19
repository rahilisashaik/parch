import React, { useRef } from 'react';
import './model-viewer.css';


const ViewerCanvas = () => {
  const canvasWrapperRef = useRef(null);

  return (
    <div>
    <div id="viewerCanvasWrapper">
      <div className='viewer-wrapper'>
	        <div id='viewerCanvasWrapper'></div>
	        <div className='slider-container' id='explodeSliderWrapper' ref={canvasWrapperRef}>
	            <div className='explode-content'>
	                {/* <input type='range' min='0' max='10' step='0.01' value='1' className='slider' id='explodeSlider'> */}
	                <label className="cb-container">Explode Face (may cause lags!)
	                    {/* <input type="checkbox" id="explodeFace"> */}
	                    <span className="checkmark"></span>
	                </label>
	            </div>
	        </div>
    </div>
    </div>
    </div>
  );
};

export default ViewerCanvas;

