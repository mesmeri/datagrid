const startingState  = {
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

const loadState = () => {
	// try {
	// 	const serializedColumns = JSON.parse(localStorage.getItem('columns'))
	// 	const serializedFilters = JSON.parse(localStorage.getItem('filters'))

	// 	const persistedState = {
	// 		columns: serializedColumns,
	// 		filters: serializedFilters,
	// 		general: startingState.general,

	// 	}
	//     return persistedState
	//   } catch (err) {
	//     return startingState
	// }
	return startingState
}

const saveState = (args) => {
	try {
		args.forEach(el => {
    		const serializedData = JSON.stringify(el.data);
    		localStorage.setItem(el.key, serializedData)
		})
	  } catch (err) {
	}
}

export {
	loadState,
	saveState,
}