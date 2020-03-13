import React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'; 
import { shirtSizesFilterSet} from '../../../actions/actions'
import store from '../../../store/store'

const sizeOptions = [
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
  { value: 'XL', label: 'XL' },
  { value: '2XL', label: '2XL' },
  { value: '3XL', label: '3XL' }
]

const animatedComponents = makeAnimated();

const SelectShirtSize = ({ shirtSizesFilterSet }) => {

	const handleSelection = (options) => {
		store.dispatch(shirtSizesFilterSet('S'))
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

const mapStateToProps = () => {
	return {}
}

const mapDispatchToProps = {
	shirtSizesFilterSet, 
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectShirtSize)