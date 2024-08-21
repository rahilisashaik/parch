
import React from 'react';

const ViewerShareSidebar = () => {
  return (
    <div>
      <div className='left-sidebar' id='modelBrowser'>
	            <div className='sidebar-content' id='modelBrowserContent'>
	                <div className='graph-item-wrapper'>
	                    <div className='graph-item'>
	                        <div className='graph-left'>
	                            <div className='graph-folder'>
	                                <i className='fa fa-folder'></i>
	                            </div>
	                            {/* <div className='graph-name'>Test Scene</div> */}
	                        </div>
	                        <div className='graph-right'>
	                            <div className='graph-visible'>
	                                <i className='fa fa-eye'></i>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
    </div>
  );
};

export default ViewerShareSidebar;