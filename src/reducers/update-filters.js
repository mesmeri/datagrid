const updateFilters = (state, action) => {
	switch (action.type) {
		case 'SEARCH_FILTER_SET':
			return {
				...state.filters,
				searchFilter: action.payload,
			}
		case 'IS_MARRIED_FILTER_SET':
			return {
				...state.filters,
				isMarriedFilter: action.payload,
			}
		case 'SHIRT_SIZES_FILTER_SET':
			return {
				...state.filters,
				shirtSizeFilter: action.payload,
			}
		default: 
			return state.filters
	}
} 

export default updateFilters