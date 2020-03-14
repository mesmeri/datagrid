import React from 'react'
import SortIndicators from '../../sort-indicators/sort-indicators'
import { columnSelected, columnUnselected, columnClearedAll } from '../../../actions/actions'
import { connect } from 'react-redux'
import store from '../../../store/store'

const headers = ['Number', 'First name', 'Last name', 'Gender', 'Married', 'Points', 'Shirt size']

class TableHeaders extends React.Component {

	handleClick = (e, columnId) => {
		if (e.target.tagName === 'INPUT') {
			return
		}
		const isShiftPressed = e.shiftKey	

		this.toggleColumn(isShiftPressed, columnId)
	}

	toggleColumn = (isShiftPressed, columnId) => {
		const { dispatch } = store
		const { sortedColumns, 
				columnSelected, 
				columnUnselected, 
				columnClearedAll } = this.props
		if (sortedColumns.find((el) => el.id === columnId)) {
			dispatch(columnUnselected(columnId))
		} else if (!isShiftPressed && sortedColumns.length !== 0) {
			dispatch(columnClearedAll())
			dispatch(columnSelected(columnId))
		} else {
			dispatch(columnSelected(columnId))
		}
	}

	render () {
		const { sortedColumns } = this.props

		const items = headers.map(el => {
			if (el === 'Number') {
				return <div className="number" key={el}>№</div>
			}

			let direction = null

			const classes = ['column-header']
			const columnInfo = sortedColumns.find((column) => column.id === el)
			console.log('columnInfo', columnInfo)

			if (columnInfo) {
				console.log(columnInfo.id)
				classes.push('selected')
				direction = columnInfo.direction
			}

			return (
				<div className={classes.join(' ')}
					key={el}
					onClick={(e)=> this.handleClick(e, el)} 
					>
					{el}
					<SortIndicators 
						columnId={el}
						direction={direction} />
				</div>
			)
		})

		return (
			<>
				{ items }
			</>
		)
	}
}

const mapStateToProps = ({ sortedColumns }) => {
	return {
		sortedColumns,
	}
}

const mapDispatchToProps = {
	columnSelected,
	columnUnselected,
	columnClearedAll,
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeaders)