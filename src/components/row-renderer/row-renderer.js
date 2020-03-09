import React, { PureComponent } from 'react'

import './row-renderer.css'


class RowRenderer extends PureComponent {

	render () {

		if (this.props.index === 0) {
			return (
				<div className="table-row table-header" style={this.props.style}>
					<div className="number">№</div>
					<div>First name</div>
					<div>Last name</div>
					<div>Email</div>
					<div>Gender</div>
					<div>Car</div>
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
				<div>{el.first_name}</div>
				<div>{el.last_name}</div>
				<div>
					<a href={el.email}>
						{el.email}
					</a>
				</div>
				<div>{el.gender}</div>
				<div>{el.carMake}</div>
			</div>
		)
	}
}

export default RowRenderer