import React from 'react'
import { connect } from 'react-redux'
import { columnWasHidden, columnWasShown } from '../../../actions/actions'
import DataService from '../../../services/data-service'

const HideColumnsPanel = ({ hiddenColumns, columnWasHidden, columnWasShown }) => {
	const service = new DataService()
	const columns = ['First name', 'Last name', 'Gender', 'Married', 'Points', 'Shirt size']
	const items = columns.map((el, ind) => {
		const isChecked = (!hiddenColumns.includes(service.mapStrToDataField(el)))
		const columnId = service.mapStrToDataField(el)
		return (
			<div className="custom-control custom-checkbox  hide-columns" key={el}>
		      <input type="checkbox" 
		      		className="custom-control-input" 
		      		id={`check-${ind}`} 
		      		checked={isChecked} 
		      		onChange={(e) => handleCheck(e, columnId)}
		      	/>
		      <label className="custom-control-label" htmlFor={`check-${ind}`}>
		      	{ el }
		      </label>
		    </div>
		)
	})

	const handleCheck = (e, columnId) => {
		if (e.target.checked) {
			columnWasShown(columnId)
		} 
		else {
			columnWasHidden(columnId)
		}
	}

	return (
		<div className="form-group">
			{ items }
		</div>
	)
}

const mapStateToProps = ({ columns: { hiddenColumns }}) => {
	return {
		hiddenColumns,
	}
}

const mapDispatchToProps = {
	columnWasHidden,
	columnWasShown,
}

export default connect(mapStateToProps, mapDispatchToProps)(HideColumnsPanel)