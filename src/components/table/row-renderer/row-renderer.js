import React, { PureComponent } from 'react'
import SortIndicators from '../../../components/sort-indicators/sort-indicators'

class RowRenderer extends PureComponent {

	handleSortClick = (columnId, direction) => {
		
	}

	render () {

		if (this.props.index === 0) {
			return (
				<div className="table-row table-header" style={this.props.style}>
					<div className="number">№</div>
					<div className="column-header">
						First name
						<SortIndicators handleSortClick={this.handleSortClick} columnId="name" />
					</div>
					<div className="column-header">
						Last name
						<SortIndicators handleSortClick={this.handleSortClick} columnId="lastName" />
					</div>
					<div className="column-header">
						Gender
						<SortIndicators handleSortClick={this.handleSortClick} columnId="gender" />
					</div>
					<div className="column-header">
						Points
						<SortIndicators handleSortClick={this.handleSortClick} columnId="points" />
					</div>
					<div className="column-header">
						Shirt size
						<SortIndicators handleSortClick={this.handleSortClick} columnId="shirtSize"/>
					</div>
				</div>
			)
		}

		const el = this.props.data[this.props.index - 1];
		const classes = ["table-row"];

		return (
			<div style={this.props.style} 
				className={classes.join(' ')} 
			>
				<div className="number">{this.props.index}</div>
				<div>{el.firstName}</div>
				<div>{el.lastName}</div>
				<div>{el.gender}</div>
				<div>{el.points}</div>
				<div>{el.shirtSize}</div>
			</div>
		)
	}
}

export default RowRenderer