import React from 'react'
import { CSVLink } from 'react-csv'
import { connect } from 'react-redux'
import getDisplayData from '../../../reducers/selectors'

const allHeaders = [ 
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Gender", key: "gender" },
  { label: "Married", key: "isMarried" },
  { label: "Points", key: "points" },
  { label: "Shirt size", key: "shirtSize" }
]

const DownloadBtn = ({ displayData, hiddenColumns }) => {
	const headers = allHeaders.filter(el => !hiddenColumns.includes(el.key))

	return ( 
		<CSVLink data={displayData} headers={headers}>
		  Download data in CSV
		</CSVLink>
	)
}

const mapStateToProps = (state) => {
	return {
		displayData: getDisplayData(state),
		hiddenColumns: state.columns.hiddenColumns,
	}
} 

export default connect(mapStateToProps)(DownloadBtn)