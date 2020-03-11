import React from 'react'

import './sort-indicators.css'

const SortIndicators = ({ handleSortClick, columnId }) => {
	console.log(handleSortClick, columnId)
	const handleUpSortClick = () => handleSortClick(columnId, 'up')
	const handleBottomSortClick = () => handleSortClick(columnId, 'bottom')
	return (
		<div className="sort-indicators">
			<button className="arrow arrow-up" onClick={handleUpSortClick} />
			<button className="arrow arrow-bottom" onClick={handleBottomSortClick} />
		</div>
	)
}

export default SortIndicators