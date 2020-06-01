import React from 'react'
import { connect } from 'react-redux'
import { searchFilterSet } from '../../actions/actions'
import store from '../../store/store'

const Search = ({ searchFilterSet }) => {
	const handleSearch = (e) => {
		const value = e.target.value.trim()
		store.dispatch(searchFilterSet(value))
	}

	return (
		<form className="form-inline my-lg-0">
	      <input 
	      	className="form-control mr-sm-2" 
	      	type="text" 
	      	placeholder="Search"
	      	onChange={(e) => handleSearch(e)} />
    	</form>
	)
}

const mapStateToProps = () => {
	return {}	
}

const mapDispatchToProps = {
	searchFilterSet,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
