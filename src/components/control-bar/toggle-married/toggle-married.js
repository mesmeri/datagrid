import React from 'react'
import { connect } from 'react-redux'
import { isMarriedFilterSet } from '../../../actions/actions'
import store from '../../../store/store'

const ToggleMarried = ({ isMarriedFilterSet }) => {
	const handleChange = (e) => {
		const { checked } = e.target 
		store.dispatch(isMarriedFilterSet(checked))
	}

	return (
		<div className="custom-control custom-switch ml-5">
	      <input 
	      	type="checkbox" 
	      	className="custom-control-input" 
	      	id="toggleMarried"
	      	onChange={(e) => handleChange(e)} />
	      <label className="custom-control-label" htmlFor="toggleMarried">
	      	Only married
	      </label>
	    </div>
	)
}

const mapStateToProps = () => {
	return {}
}

const mapDispatchToProps = {
	isMarriedFilterSet,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleMarried)