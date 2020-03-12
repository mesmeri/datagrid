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


				// <div className="table-row table-header" style={this.props.style}>
				// 	<div className="number">№</div>
				// 	<div className="column-header"
				// 		onClick={this.handleSort.bind(this, 'name')} 
				// 		columnId="name"
				// 		>
				// 		First name
				// 		<SortIndicators />
				// 	</div>
				// 	<div className="column-header"
				// 		onClick={this.handleSort.bind(this, 'lastName')}
				// 		columnId="lastName"
				// 		>
				// 		Last name
				// 		<SortIndicators />
				// 	</div>
				// 	<div className="column-header" 
				// 		onClick={this.handleSort.bind(this, 'gender')}
				// 		columnId="gender"
				// 		>
				// 		Gender
				// 		<SortIndicators />
				// 	</div>
				// 	<div className="column-header" 
				// 		onClick={this.handleSort.bind(null, 'points')}
				// 		columnId="points"
				// 		>
				// 		Points
				// 		<SortIndicators />
				// 	</div>
				// 	<div className="column-header"
				// 		onClick={this.handleSort.bind(this, 'shirtSize')}
				// 		columnId="shirtSize"
				// 		>
				// 		Shirt size
				// 		<SortIndicators />
				// 	</div>
				// </div>