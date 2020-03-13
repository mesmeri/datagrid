import React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'; 
import { sizesSelected, prevDataApplied, prevDataStashed } from '../../../actions/actions'

const sizeOptions = [
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
  { value: 'XL', label: 'XL' },
  { value: '2XL', label: '2XL' },
  { value: '3XL', label: '3XL' }
]

const animatedComponents = makeAnimated();


const MultiselectShirtSize = ({ data, changedData, prevData, sizesSelected, prevDataApplied, prevDataStashed }) => {

	const handleSelection = (options) => {
		console.log(options)
	}

	return (
		<div className="ml-5" style={{minWidth: '200px'}}>
  			<Select
  				closeMenuOnSelect={false}
      			components={animatedComponents}
			    isMulti
			    name="sizes"
			    options={sizeOptions}
			    className="basic-multi-select"
			    classNamePrefix="select"
			    onChange={(selectedOptions)=> handleSelection(selectedOptions)}
			  />
		</div>
	)
}

const mapStateToProps = ({ data, changedData, prevData }) => {
	return {
		data,
		changedData,
		prevData,
	}
}

const mapDispatchToProps = {
	sizesSelected,
	prevDataApplied,
	prevDataStashed, 
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiselectShirtSize)