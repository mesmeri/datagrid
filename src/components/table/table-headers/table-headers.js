import React from 'react'
import SortIndicators from '../../sort-indicators/sort-indicators'
import { columnSelected, columnUnselected, columnClearedAll } from '../../../actions/actions'
import { connect } from 'react-redux'
import DataService from '../../../services/data-service'

const headers = ['Number', 'First name', 'Last name', 'Gender', 'Married', 'Points', 'Shirt size']

class TableHeaders extends React.PureComponent {

	handleClick (e, columnId) {
		if (e.target.tagName === 'INPUT') {
			return
		}
		const isShiftPressed = e.shiftKey	

		this.toggleColumn(isShiftPressed, columnId)
	}

	toggleColumn = (isShiftPressed, columnId) => {
		const { sortedColumns, 
				columnSelected, 
				columnUnselected, 
				columnClearedAll } = this.props
		if (sortedColumns.find((el) => el.id === columnId)) {
			columnUnselected(columnId)
		} else if (!isShiftPressed && sortedColumns.length !== 0) {
			columnClearedAll()
			columnSelected(columnId)
		} else {
			columnSelected(columnId)
		}
	}

	render () {
		const { sortedColumns, hiddenColumns, style } = this.props
		const service = new DataService()
		const count = (headers.length - hiddenColumns.length)
		const styleObj = {width:`calc((100% - 60px) / ${count - 1})`}

		const items = headers.map(el => {
			if (el === 'Number') {
				return <div className="number" key={el} >№</div>
			}

			if (hiddenColumns.includes(service.mapStrToDataField(el))) {
				//eslint-disable-next-line
				return 
			}
			let direction = null

			const classes = ['column-header']
			const columnInfo = sortedColumns.find((column) => column.id === el)

			if (columnInfo) {
				classes.push('selected')
				direction = columnInfo.direction
			}

			return (
				<div className={classes.join(' ')}
					style={styleObj}
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
			<div className="table-row table-header" style={style}>
				{ items }
			</div>
		)
	}
}

const mapStateToProps = ({ columns: { sortedColumns, hiddenColumns }}) => {
	return {
		sortedColumns,
		hiddenColumns,
	}
}

const mapDispatchToProps = {
	columnSelected,
	columnUnselected,
	columnClearedAll,
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeaders)