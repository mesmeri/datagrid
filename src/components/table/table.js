import React from 'react'
import { connect } from 'react-redux'
import NativeTable from './native-table/native-table'
import VirtualizedTable from './virtualized-table/virtualized-table'
import getDisplayData  from '../../reducers/selectors'

import './table.css'

const Table = ({ displayData, virtualization }) => {
	console.log('from table', displayData.length)

	const NoData = () => {
		return (
			<div className="no-data text-center">Sorry, nothing was found ...</div>
		)
	}

	return (
		<>
		{ displayData.length === 0 ? < NoData /> : virtualization ? 
				<VirtualizedTable data={displayData} /> : 
				<NativeTable data={displayData} />}
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		displayData: getDisplayData(state),
		virtualization: state.virtualization,
	}
}

export default connect(mapStateToProps)(Table)