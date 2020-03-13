import React, { PureComponent } from 'react'
import TableHeaders from '../table-headers/table-headers'

class RowRenderer extends PureComponent {

	render () {
		if (this.props.index === 0) {
			return (
				<div className="table-row table-header" style={this.props.style}>
					<TableHeaders />
				</div>
			)
		}

		const el = this.props.data[this.props.index - 1]
		const married = el.isMarried ? "Yes" : "No"
		const classes = ["table-row"];

		return (
			<div style={this.props.style} 
				className={classes.join(' ')} 
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

export default RowRenderer
