import React from 'react'
import { columnDirectionChanged } from '../../actions/actions'
import { connect } from 'react-redux'
import store from '../../store/store'

import './sort-indicators.css'

const SortIndicators = ({ columnId, direction, columnDirectionChanged }) => {
	const handleChangeDirection = (value) => {
		store.dispatch(columnDirectionChanged(value, columnId))
	}

	return (
		<div className="sort-indicators">
			<input type="radio"
				checked={direction === 'asc'}
				onChange={() => handleChangeDirection('asc')}
				className="arrow arrow-up" 
			/>
			<input type="radio"
				checked={direction === 'desc'} 
				onChange={() => handleChangeDirection('desc')}
				className="arrow arrow-down"
			/>
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