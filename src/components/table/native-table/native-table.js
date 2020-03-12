import React from 'react'
import TableHeaders from '../table-headers/table-headers'

const NativeTable = ({ data }) => {
	const listItems = data.map((el, index) => {
		return (
			<div className="table-row native-table-row" key={el.firstName + el.lastName}>
				<div className="number">{index + 1}</div>
				<div>{el.firstName}</div>
				<div>{el.lastName}</div>
				<div>{el.gender}</div>
				<div>{el.points}</div>
				<div>{el.shirtSize}</div>
			</div>
		)
	})

	return (
		<div className="table-wrapper">
			<div className="table-inner">
				<div className="table-row table-header">
					<TableHeaders data={data} />
				</div>
				{ listItems }
			</div>
		</div>
	)
}

export default NativeTable