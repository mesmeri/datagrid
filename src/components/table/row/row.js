import React from 'react'
import { connect } from 'react-redux'

const Row = ({ el, selectedRows, cls, onClick, index, style, hiddenColumns }) => {
	const fields = ['id', 'firstName', 'lastName', 'gender', 'isMarried', 'points', 'shirtSize']
	const classes = cls
	const count = (fields.length - hiddenColumns.length)
	const styleObj = {width:`calc((100% - 60px) / ${count - 1})`}
	const cells = fields.map(field => { 
		if (field === 'id') {
			return <div className="number" key={field}>{index}</div> 
		}
		if (field === 'isMarried') {
			const married = (el.isMarried ? 'Yes' : 'No')
			return (!(hiddenColumns.includes('isMarried')) ? 
						<div key={'isMarried'} style={styleObj}>{married}</div> :
						null )
		}

		return (!(hiddenColumns.includes(field)) ?
					<div key={field} style={styleObj}>{el[field]}</div> :
					null )
	})

	el.gender === 'Male' ? classes.push('male') : classes.push('female')
	if (selectedRows.includes(el.id)) {
		classes.push('active')
	}

	return (
		<div style={style || null} 
			className={classes.join(' ')} 
			onClick={onClick}
		>
			{ cells }
		</div>
	)
}

const mapStateToProps = ({ general: { selectedRows }, columns: { hiddenColumns }}) => {
	return {
		selectedRows,
		hiddenColumns,
	}
}

export default connect(mapStateToProps)(Row)