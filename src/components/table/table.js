import React from 'react'
import { connect } from 'react-redux'
import NativeTable from './native-table/native-table'
import VirtualizedTable from './virtualized-table/virtualized-table'

import './table.css'

const Table = ({ data, virtualization }) => {

	return (
		<>
			{ virtualization ? 
				<VirtualizedTable data={data} /> : 
				<NativeTable data={data} /> }
		</>
	)
}

const mapStateToProps = ({ data, virtualization }) => {
	return {
		data,
		virtualization,
	}
}

export default connect(mapStateToProps)(Table)