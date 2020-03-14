import React from 'react'
import TableHeaders from '../table-headers/table-headers'
import { connect } from 'react-redux'
import { singleRowSelected, multipleRowsSelected } from '../../../actions/actions'
import store from '../../../store/store'


const NativeTable = ({ data, selectedRows, singleRowSelected, multipleRowsSelected }) => {
	const handleSelectRow = (e, rowId) => {
		if (!e.ctrlKey) {
			store.dispatch(singleRowSelected(rowId))
		} else {
			store.dispatch(multipleRowsSelected(rowId))
		}
	}

	const listItems = data.map((el, index) => {
		const classes = ['table-row', 'native-table-row']
		el.gender === 'Male' ? classes.push('male') : classes.push('female')
		if (selectedRows.includes(el.id)) {
			classes.push('active')
		}

		return (
			<div 
				className={classes.join(" ")} 
				key={el.firstName + el.lastName}
				onClick={(e) => handleSelectRow(e, el.id)}
			>
				<div className="number">{index + 1}</div>
				<div>{el.firstName}</div>
				<div>{el.lastName}</div>
				<div>{el.gender}</div>
				<div>{el.isMarried ? "Yes" : "No"}</div>
				<div>{el.points}</div>
				<div>{el.shirtSize}</div>
			</div>
		)
	})

	return (
		<div className="table-wrapper">
			<div className="table-inner">
				<div className="table-row table-header">
					<TableHeaders />
				</div>
				{ listItems }
			</div>
		</div>
	)
}

const mapStateToProps = ({ selectedRows }) => {
	return {
		selectedRows,
	}
}

const mapDispatchToProps = {
	singleRowSelected,
	multipleRowsSelected,
}

export default connect(mapStateToProps, mapDispatchToProps)(NativeTable)