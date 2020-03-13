import React from 'react'
import Search from '../search/search'
import ToggleMarried from './toggle-married/toggle-married'
import SelectShirtSize from './select-shirt-size/select-shirt-size'

const ControlBar = () => {

	return (
		<div className="controls-block pt-2 pb-2 mb-5 d-flex align-items-center">
  			<Search />
  			<ToggleMarried />
  			<SelectShirtSize />
  		</div>
	)
}

export default ControlBar