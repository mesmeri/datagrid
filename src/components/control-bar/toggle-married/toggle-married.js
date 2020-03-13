import React from 'react'
import { connect } from 'react-redux'
import { dataChanged, prevDataApplied, prevDataStashed } from '../../../actions/actions'
import { findMatches } from '../../../utils/utils'
import store from '../../../store/store'

const ToggleMarried = ({ data, changedData, prevData, dataChanged, noMatchedData, prevDataStashed, prevDataApplied }) => {
	const field = 'isMarried'

	const handleChange = (e) => {
		const { checked } = e.target 

		if (checked) {
			const cloneData = (changedData.length === 0) ? [...data] : [...changedData]
			const matchedData = findMatches(cloneData, checked, field)
			store.dispatch(prevDataStashed([...cloneData]))
			store.dispatch(dataChanged(matchedData))
		} else {
			store.dispatch(dataChanged(prevData))
		}
	}

	return (
		<div className="custom-control custom-switch ml-5">
	      <input 
	      	type="checkbox" 
	      	className="custom-control-input" 
	      	id="toggleMarried"
	      	onChange={(e) => handleChange(e)} />
	      <label className="custom-control-label" htmlFor="toggleMarried">Only married</label>
	    </div>
	)
}

const mapStateToProps = ({ data, changedData, prevData, noMatchedData }) => {
	return {
		data,
		changedData,
		prevData,
		noMatchedData,
	}
}

const mapDispatchToProps = {
	dataChanged,
	prevDataApplied,
	prevDataStashed,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleMarried)