import React from 'react'
import { connect } from 'react-redux'
import { rowsDeleted } from '../../../actions/actions'
import store from '../../../store/store'

const DeleteRowsBtn = ({ selectedRows, rowsDeleted }) => {

	const handleDelete = () => {
		store.dispatch(rowsDeleted())
	}
	const classes = ['btn', 'btn-primary', 'ml-1', 'btn-sm']
	let disabled = false

	if (selectedRows.length === 0) {
		classes.push('disabled')
		disabled = true
	}

	return (
		<button 
			className={classes.join(" ")}
			onClick={handleDelete}
			disabled={disabled}
  		>
  			Delete rows
  		</button>
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