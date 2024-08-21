
import React from 'react';
import './model-viewer.css';

const ViewerHeader = () => {
  return (
    <div>
	    <div className='header'>
	        <div className='header-left'> 
	            <div className='header-item' id='toggleModelBrowser'>
	                <div className='header-icon'><i className='fa fa-sitemap'></i></div>
	                <div className='header-title'>Components</div>
	            </div>
	            <label className='header-item' id='browseModelBtn'>
	                <div className='header-icon'><i className='fa fa-folder'></i></div>
	                <div className='header-title'>Browse Project Directory</div>
	            </label>
	        </div>
			<div className='header-right'>
	            <div className='header-item' id='downloadScreen'>
	                <div className='header-icon'><i className='fa fa-camera'></i></div>
	                <div className='header-title'>Screenshot</div>
	            </div>
	            <div className='header-item' id='toggleShare'>
	                <div className='header-icon'><i className='fa fa-share-alt'></i></div>
	                <div className='header-title'>Share</div>
	            </div>
	        </div>
	    </div>
    </div>
  );
};

export default ViewerHeader;

