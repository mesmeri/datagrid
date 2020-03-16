import updateColumns from './update-columns'
import updateFilters from './update-filters'
import updateGeneral from './update-general'

const initialState = {
	columns: {
		sortedColumns: [],
		hiddenColumns: [],
	},
	filters: {
		searchFilter: '',
		isMarriedFilter: false,
		shirtSizeFilter: [],
	},
	general: {
		selectedRows: [],
		data: [],
		loading: true,
		virtualization: true,
	}
}

const reducer = (state = initialState, action) => {
	return {
		columns: updateColumns(state, action),
		filters: updateFilters(state, action),
		general: updateGeneral(state, action)
	}
}

export default reducer