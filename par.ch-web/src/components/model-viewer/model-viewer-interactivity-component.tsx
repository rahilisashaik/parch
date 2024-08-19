
// ViewerControls.js
import React from 'react';

const ViewerControls = () => {
  return (
    <div>
      <div className='footer'>
        <div className='footer-item' id='resetBtn'>
            <div className='footer-icon'><i className='fa fa-home'></i></div>
            <div className='footer-title'>Home</div>
        </div>
        <div className='footer-item' id='toggleMeasure'>
            <div className='footer-icon'><i className='	fas fa-ruler'></i></div>
            <div className='footer-title'>Measure</div>
        </div>
        <div className='footer-item item-selected' id='toggleOrbit'>
            <div className='footer-icon'><i className="fa fa-street-view"></i></div>
            <div className='footer-title'>Orbit</div>
        </div>
        <div className='footer-item' id='togglePan'>
            <div className='footer-icon'><i className='fa fa-arrows'></i></div>
            <div className='footer-title'>Pan</div>
        </div>
        <div className='footer-item' id='toggleZoom'>
            <div className='footer-icon'><i className='fa fa-search-plus'></i></div>
            <div className='footer-title'>Zoom</div>
        </div>
        <div className='footer-item' id='toggleExplode'>
            <div className='footer-icon'><i className='fa fa-cube'></i></div>
            <div className='footer-title'>Explode</div>
        </div>
      </div>
    </div>
  );
};

export default ViewerControls;
