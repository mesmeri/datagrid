import React from 'react'
// import TableRow from '../table-row/table-row'

const Table = ({ data }) => {
	const items = data.map( (el, ind) => {
		return (
			<tr key={ el.id }>
				<td>
					{ ind + 1 }
				</td>
				<td>
					{ el.first_name }
				</td>
				<td>
					{ el.last_name }
				</td>
				<td>
					<a href={ el.email }>
						{ el.email }
					</a>
				</td>
				<td>
					{ el.gender }
				</td>
				<td>
					{ el.carMake }
				</td>
			</tr>
		)
	})

	return (
		<table className="table table-hover">
			<thead>
				<tr>
					<th>№</th>
					<th>First name</th>
					<th>Last name</th>
					<th>Email</th>
					<th>Gender</th>
					<th>Car</th>
				</tr>
			</thead>
			<tbody>
				{ items }
			</tbody>
		</table>
	)
}

export default Table