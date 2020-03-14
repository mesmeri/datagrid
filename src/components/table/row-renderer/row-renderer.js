import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { singleRowSelected, multipleRowsSelected } from '../../../actions/actions'
import TableHeaders from '../table-headers/table-headers'
import store from '../../../store/store'

class RowRenderer extends PureComponent {

	handleSelectRow = (e, rowId) => {
		if (!e.ctrlKey) {
			store.dispatch(singleRowSelected(rowId))
		} else {
			store.dispatch(multipleRowsSelected(rowId))
		}
	}

	render () {
		if (this.props.index === 0) {
			return (
				<div className="table-row table-header" style={this.props.style}>
					<TableHeaders />
				</div>
			)
		}

		const { selectedRows } = this.props
		const el = this.props.data[this.props.index - 1]
		const married = el.isMarried ? "Yes" : "No"
		const classes = ["table-row"]

		el.gender === 'Male' ? classes.push('male') : classes.push('female')
		if (selectedRows.includes(el.id)) {
			classes.push('active')
		}

		return (
			<div style={this.props.style} 
				className={classes.join(' ')} 
				onClick={(e)=> this.handleSelectRow(e, el.id)}
			>
				<div className="number">{this.props.index}</div>
				<div>{el.firstName}</div>
				<div>{el.lastName}</div>
				<div>{el.gender}</div>
				<div>{married}</div>
				<div>{el.points}</div>
				<div>{el.shirtSize}</div>
			</div>
		)
	}
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
export default connect(mapStateToProps, mapDispatchToProps)(RowRenderer)
