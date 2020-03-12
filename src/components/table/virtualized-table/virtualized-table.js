import React from 'react'
import { FixedSizeList  as List } from 'react-window'
import RowRenderer from '../row-renderer/row-renderer'

const VirtualizedTable = ({ data }) => {
	return (
		<List
		    height={window.innerHeight}
		    itemCount={data.length + 1}
		    itemSize={45}
		    width={0.95 * window.innerWidth}
		    itemData={data}
		  >
		  	{ RowRenderer }
		</List>
	)
}

export default VirtualizedTable