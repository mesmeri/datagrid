import React from 'react'
import { connect } from 'react-redux'

const Row = ({ el, selectedRows, cls, onClick, index, style }) => {
	const classes = cls

	el.gender === 'Male' ? classes.push('male') : classes.push('female')
	if (selectedRows.includes(el.id)) {
		classes.push('active')
	}

	return (
		<div style={style || null} 
			className={classes.join(' ')} 
			onClick={onClick}
		>
			<div className="number">{index}</div>
			<div>{el.firstName}</div>
			<div>{el.lastName}</div>
			<div>{el.gender}</div>
			<div>{el.isMarried ? "Yes" : "No"}</div>
			<div>{el.points}</div>
			<div>{el.shirtSize}</div>
		</div>
	)
}

const mapStateToProps = ({ selectedRows }) => {
	return {
		selectedRows,
	}
}

export default connect(mapStateToProps)(Row)