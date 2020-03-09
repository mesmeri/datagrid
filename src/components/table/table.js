import React from 'react'
import { FixedSizeList  as List } from 'react-window'
import { connect } from 'react-redux'
import RowRenderer from '../row-renderer/row-renderer'

const Table = ({ data }) => {
	return (
		<List
		    height={window.innerHeight}
		    itemCount={data.length + 1}
		    itemSize={50}
		    width={0.95 * window.innerWidth}
		    itemData={data}
		  >
		  	{ RowRenderer }
		</List>
	)
}

const mapStateToProps = ({ data}) => {
	return {
		data
	}
}


export default connect(mapStateToProps)(Table)