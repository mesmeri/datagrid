import React from 'react'
import Search from '../search/search'
import ToggleMarried from './toggle-married/toggle-married'
import MultiselectShirtSize from './multiselect-shirt-size/multiselect-shirt-size'

const ControlBar = () => {

	return (
		<div className="controls-block pt-2 pb-2 mb-5 d-flex align-items-center">
  			<Search />
  			<ToggleMarried />
  			<MultiselectShirtSize />
  		</div>
	)
}

export default ControlBar