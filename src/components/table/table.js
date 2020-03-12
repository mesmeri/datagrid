import React from 'react'
import { connect } from 'react-redux'
import NativeTable from './native-table/native-table'
import VirtualizedTable from './virtualized-table/virtualized-table'

import './table.css'

const Table = ({ data, changedData, virtualization, noMatchedData }) => {

	const rowData = (changedData.length === 0) ? data : changedData
	console.log('from table', rowData.length, noMatchedData)
	const NoData = () => {
		return (
			<div className="no-data text-center">Sorry, nothing was found ...</div>
		)
	}

	return (
		<>
		{ noMatchedData ? < NoData /> : virtualization ? 
				<VirtualizedTable data={rowData} /> : 
				<NativeTable data={rowData} />}

		</>
	)
}

const mapStateToProps = ({ data, changedData, virtualization, noMatchedData }) => {
	return {
		data,
		changedData,
		virtualization,
		noMatchedData,
	}
}

export default connect(mapStateToProps)(Table)