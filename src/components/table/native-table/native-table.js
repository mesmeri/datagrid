import React from 'react'
import TableHeaders from '../table-headers/table-headers'
import Row from '../row/row'
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
		return (
			<Row
				key={el.firstName + el.lastName}
				cls={classes}
				onClick={(e) => handleSelectRow(e, el.id)}
				el={el}
				index={index + 1} 
			/>
		)
	})

	return (
		<div className="table-wrapper">
			<div className="table-inner">
				<TableHeaders style={{minHeight: '45px'}}/>
				{ listItems }
			</div>
		</div>
	)
}

const mapStateToProps = ({ general: { selectedRows }}) => {
	return {
		selectedRows,
	}
}

const mapDispatchToProps = {
	singleRowSelected,
	multipleRowsSelected,
}

export default connect(mapStateToProps, mapDispatchToProps)(NativeTable)