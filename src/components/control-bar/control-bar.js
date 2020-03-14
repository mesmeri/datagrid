import React from 'react'
import Search from '../search/search'
import ToggleMarried from './toggle-married/toggle-married'
import SelectShirtSize from './select-shirt-size/select-shirt-size'
import DeleteRowsBtn from './delete-rows-btn/delete-rows-btn'

const ControlBar = () => {

	return (
		<div className="controls-block pt-2 pb-2 mb-5 d-flex align-items-center justify-content-between">
  			<Search />
  			<ToggleMarried />
  			<SelectShirtSize />
  			<DeleteRowsBtn />
  		</div>
	)
}

export default ControlBar