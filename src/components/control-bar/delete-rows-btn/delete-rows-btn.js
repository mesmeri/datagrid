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
	  		<p style={{fontStyle: 'italic'}}>
				Hold down Ctrl to select multiple lines
	  		</p>
			<button 
				className={classes.join(" ")}
				onClick={handleDelete}
				disabled={disabled}
	  		>
	  			Delete lines
	  		</button>
  		</div>
	)
}

const mapStoreToProps = ({ selectedRows }) => {
	return {
		selectedRows,
	}
}

const mapDispatchToProps = {
	rowsDeleted,
}

export default connect(mapStoreToProps, mapDispatchToProps)(DeleteRowsBtn)