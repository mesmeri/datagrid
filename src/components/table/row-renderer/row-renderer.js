import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { singleRowSelected, multipleRowsSelected } from '../../../actions/actions'
import TableHeaders from '../table-headers/table-headers'
import Row from '../row/row'
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
				<TableHeaders style={this.props.style} />
			)
		}

		const el = this.props.data[this.props.index - 1]

		return (
			<Row 
				style={this.props.style} 
				cls={["table-row"]}
				onClick={(e) => this.handleSelectRow(e, el.id)} 
				el={el}
				index={this.props.index} />
		)
	}
}

const mapStateToProps = () => {
	return {
	}
}

const mapDispatchToProps = {
	singleRowSelected,
	multipleRowsSelected,
}

export default connect(mapStateToProps, mapDispatchToProps)(RowRenderer)
