import React from 'react'
import { connect } from 'react-redux'
import { rowsDeleted } from '../../../actions/actions'
import store from '../../../store/store'

const DeleteRowsBtn = ({ selectedRows, rowsDeleted }) => {

	const handleDelete = () => {
		store.dispatch(rowsDeleted())
	}
	const classes = ['btn', 'btn-primary', 'ml-1', 'btn-sm', 'mt-1']
	let disabled = false

	if (selectedRows.length === 0) {
		classes.push('disabled')
		disabled = true
	}

	return (
		<div className="text-center">
			<button 
				className={classes.join(" ")}
				onClick={handleDelete}
				disabled={disabled}
	  		>
	  			Delete lines
	  		</button>
	  		<span style={{fontStyle: 'italic'}} className="ml-2">
				Hold down Ctrl to select multiple lines
	  		</span>
  		</div>
	)
}

const mapStoreToProps = ({ general: { selectedRows }}) => {
	return {
		selectedRows,
	}
}

const mapDispatchToProps = {
	rowsDeleted,
}

export default connect(mapStoreToProps, mapDispatchToProps)(DeleteRowsBtn)