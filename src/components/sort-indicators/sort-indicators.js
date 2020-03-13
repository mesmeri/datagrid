import React from 'react'
import { columnDirectionChanged } from '../../actions/actions'
import { connect } from 'react-redux'
import store from '../../store/store'

import './sort-indicators.css'

const SortIndicators = ({ columnId, direction, columnDirectionChanged }) => {
	const handleChangeDirection = (e) => {
		const direction = e.target.value

		store.dispatch(columnDirectionChanged(direction, columnId))
	}

	return (
		<div className="sort-indicators">
			<input type="radio" name="direction" 
				checked={direction === 'asc'}
				onChange={(e) => handleChangeDirection(e)}
				className="arrow arrow-up" 
				value="asc" />
			<input type="radio" name="direction"
				checked={direction === 'desc'} 
				onChange={(e) => handleChangeDirection(e)}
				className="arrow arrow-down"
				value="desc" />
		</div>
	)
}

const mapStateToProps = () => {
	return {}
}

const mapDispatchToProps = {
	columnDirectionChanged,
}

export default connect(mapStateToProps, mapDispatchToProps)(SortIndicators)