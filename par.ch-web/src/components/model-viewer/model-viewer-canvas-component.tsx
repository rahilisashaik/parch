import React, { useRef } from 'react';
import './model-viewer.css';
import * as THREE from 'three';

const ViewerCanvas = () => {
  const canvasWrapperRef = useRef(null);
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');

  let texts = ['RIGHT', 'LEFT', 'TOP', 'BOTTOM', 'FRONT', 'BACK'];
  let materials = [];

  let size = 64;
	canvas.width = size;
	canvas.height = size;

  ctx!.font = 'bolder 12px "Open sans", Arial';
	ctx!.textBaseline = 'middle';
	ctx!.textAlign = 'center';

	let mainColor = '#fff';
	let otherColor = '#ccc';

	let bg = ctx!.createLinearGradient(0, 0, 0, size);
	bg.addColorStop(0, mainColor);
	bg.addColorStop(1,  otherColor);

	for (let i = 0; i < 6; i++) {
		if (texts[i] == 'TOP') {
			ctx!.fillStyle = mainColor;
		} else if (texts[i] == 'BOTTOM') {
			ctx!.fillStyle = otherColor;
		} else {
			ctx!.fillStyle = bg;
		}
		ctx!.fillRect(0, 0, size, size);
		ctx!.strokeStyle = '#aaa';
		ctx!.setLineDash([8, 8]);
		ctx!.lineWidth = 4;
		ctx!.strokeRect(0, 0, size, size);
		ctx!.fillStyle = '#999';
		ctx!.fillText(texts[i], size / 2, size / 2);
		materials[i] = new THREE.MeshBasicMaterial({
			map: textureLoader.load(canvas.toDataURL())
		});
	}
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

