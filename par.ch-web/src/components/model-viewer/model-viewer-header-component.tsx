
import React from 'react';

const ViewerHeader = () => {
  return (
    <div>
    <div className='wrapper'>
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
	        <div className='header-right'></div>
	    </div>
    </div>
    </div>
  );
};

export default ViewerHeader;

