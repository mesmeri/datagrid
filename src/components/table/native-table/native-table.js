import React from 'react'

const NativeTable = ({ data }) => {
	const listItems = data.map((el, index) => {
		return (
			<div className="table-row native-table-row" key={el.first_name + el.last_name}>
				<div className="number">{index + 1}</div>
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
	})

	return (
		<div className="table-wrapper">
			<div className="table-inner">
				<div className="table-row native-table-row table-header">
					<div className="number">№</div>
					<div>First name</div>
					<div>Last name</div>
					<div>Email</div>
					<div>Gender</div>
					<div>Car</div>
				</div>
				{ listItems }
			</div>
		</div>
	)
}

export default NativeTable