import React from 'react'
import { connect } from 'react-redux'
import { dataChanged, nothingMatched } from '../../actions/actions'
import { findMatches } from '../../utils/utils'
import store from '../../store/store'

const Search = ({ data, dataChanged, nothingMatched }) => {
	const { dispatch } = store 
	const handleSearch = (value) => {
		const matchedData = findMatches([...data], value)
		if (matchedData.length === 0) {
			dispatch(nothingMatched(true))
			dispatch(dataChanged(matchedData))
		} else {
			dispatch(nothingMatched(false))
			dispatch(dataChanged(matchedData))
		}
	}

	return (
		<form className="form-inline my-2 my-lg-0">
	      <input 
	      	className="form-control mr-sm-2" 
	      	type="text" 
	      	placeholder="Search"
	      	onChange={(e) => handleSearch(e.target.value.trim())} />
    	</form>
	)
}

const mapStateToProps = ({ data }) => {
	return {
		data,
	}
}

const mapDispatchToProps = () => {
	return {
		dataChanged,
		nothingMatched,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
