import React from 'react'
import SortIndicators from '../../sort-indicators/sort-indicators'
import { columnSelected, columnUnselected, columnClearedAll, dataChanged } from '../../../actions/actions'
import { connect } from 'react-redux'
import { sortItems } from '../../../utils/utils'
import DataService from '../../../services/data-service'

const TableHeaders = ({ data, selectedColumns, columnSelected, columnUnselected, columnClearedAll, dataChanged }) => {
	const headers = ['Number', 'First name', 'Last name', 'Gender', 'Points', 'Shirt size']
	const service = new DataService()
	const handleClick = (e, columnId) => {
		if (e.target.tagName === 'INPUT') {
			return
		}
		const isShiftPressed = e.shiftKey	

		handleSort(isShiftPressed, columnId)
		toggleColumn(isShiftPressed, columnId)
	}

	const handleSort = (e, columnId, direction) => {
		const field = service.mapStrToDataField(columnId)
		const orderedData = sortItems([...data], field, direction)

		dataChanged(orderedData)
	}

	const toggleColumn = (isShiftPressed, columnId) => {
		if (selectedColumns.find((el) => el.id === columnId)) {
			columnUnselected(columnId)
		} else if (!isShiftPressed && selectedColumns.length !== 0) {
			columnClearedAll()
			columnSelected(columnId)
		} else {
			columnSelected(columnId)
		}
	}

	const items = headers.map(el => {
		if (el === 'Number') {
			return (
				<div className="number" key={el}>№</div>
			)
		}

		const classes = ['column-header']
		const columnInfo = selectedColumns.find((column) => column.id === el)
		let direction = null

		if (columnInfo) {
			classes.push('selected')
			direction = columnInfo.direction
		}

		return (
			<div className={classes.join(' ')}
				key={el}
				onClick={(e)=> handleClick(e, el)} 
				>
				{el}
				<SortIndicators 
					columnId={el}
					direction={direction}
					handleSort={handleSort} />
			</div>
		)
	})
	return (
		<>
			{ items }
		</>
	)
}

const mapStateToProps = ({ data, selectedColumns }) => {
	return {
		data,
		selectedColumns,
	}
}

const mapDispatchToProps = {
	columnSelected,
	columnUnselected,
	columnClearedAll,
	dataChanged,
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeaders)