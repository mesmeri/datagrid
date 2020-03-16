import React from 'react'
import Search from '../search/search'
import ToggleMarried from './toggle-married/toggle-married'
import SelectShirtSize from './select-shirt-size/select-shirt-size'
import DeleteRowsBtn from './delete-rows-btn/delete-rows-btn'
import HideColumnsPanel from './hide-columns-panel/hide-columns-panel'
import DownloadBtn from './download-btn/download-btn'

import './control-bar.css'

const ControlBar = () => {

	return (
		<div className="mb-4 d-flex flex-column" >
			<div className="row mb-4">
	  			<div className="col-6 col-md-3">
	  				<Search />
	  			</div>
	  			<div className="col-6 col-md-2">
	  				<ToggleMarried />
	  			</div>
	  			<div className="col-12 col-md-4">
	  				<SelectShirtSize />
	  			</div>
		  		<div className="col-8 offset-md-1 col-md-2">
		  			<DownloadBtn />
				</div>
	  		</div>
	  		<div className="row">
	  			<div className="col-10 offset-1 col-md-6 offset-md-0">
	  				<HideColumnsPanel />
	  			</div>
	  			<div className="col-8 col-md-4 align-items-center mb-0">
	  				<DeleteRowsBtn />
	  			</div>
	  		</div>
	  	</div>
	)
}

export default ControlBar