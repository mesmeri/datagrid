import React from 'react'
import Search from '../search/search'
import ToggleMarried from './toggle-married/toggle-married'
import SelectShirtSize from './select-shirt-size/select-shirt-size'
import DeleteRowsBtn from './delete-rows-btn/delete-rows-btn'
import HideColumnsPanel from './hide-columns-panel/hide-columns-panel'

import './control-bar.css'

const ControlBar = () => {

	return (
		<div className="mb-4">
			<div className="row mb-4">
	  			<div className="col-md-2">
	  				<Search />
	  			</div>
	  			<div className="col-md-2">
	  				<ToggleMarried />
	  			</div>
	  			<div className="col-md-4">
	  				<SelectShirtSize />
	  			</div>
	  		</div>
	  		<div className="row">
	  			<div className="col-md-6">
	  				<HideColumnsPanel />
	  			</div>
	  			<div className="col-md-4">
	  				<DeleteRowsBtn />
	  			</div>
	  		</div>
	  	</div>
	)
}

export default ControlBar