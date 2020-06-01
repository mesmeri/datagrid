import React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'; 
import { shirtSizesFilterSet} from '../../../actions/actions'
import store from '../../../store/store'
import './select-shirt-size'

const sizeOptions = [
  { value: 'XS', label: 'XS' },
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
		const selectedOptions = (options ? options.map(el => el.value) : [])
		store.dispatch(shirtSizesFilterSet(selectedOptions))
	}

	return (
		<div className="ml-5">
  			<Select
  				closeMenuOnSelect={false}
      			components={animatedComponents}
			    isMulti
			    name="sizes"
				styles={{
			      control: (provided, state) => ({
			        ...provided,
			        borderColor: state.isFocused ? '#d0eae2' : '#dddddd',
			        boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(120,194,173,0.25)' : '#dddddd',
			        cursor: 'pointer'

			      }),
			    }}
			    placeholder={'Select shirt size...'}
			    options={sizeOptions}
			    className="basic-multi-select select-control"
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