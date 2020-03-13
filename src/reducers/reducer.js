const initialState = {
	data: [],
	displayData: [],
	sortedColumns: [],
	loading: true,
	virtualization: true,
	noMatchedData: false,
	searchFilter: '',
	isMarriedFilter: false,
	shirtSizeFilter: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'DATA_LOADED':
			return {
				...state,
				data: action.payload,
				displayData: action.payload,
				loading: false
			}
		case 'TOGGLE_VIRTUALIZATION': 
			return {
				...state,
				virtualization: !state.virtualization,
			}
		case 'COLUMN_SELECTED':
			return {
				...state,
				sortedColumns: [
					...state.sortedColumns,
					action.payload
				],
			}
		case 'COLUMN_UNSELECTED':
			const ind = state.sortedColumns.findIndex((el) => el.id = action.payload)
			const newSortedColumns = [
				...state.sortedColumns.slice(0, ind),
				...state.sortedColumns.slice(ind + 1)
				]
			return {
				...state,
				sortedColumns: newSortedColumns,
			}
		case 'COLUMN_CLEARED_ALL':
			return {
				...state,
				sortedColumns: [],
			}
		case 'DATA_CHANGED':
			return {
				...state,
				displayData: action.payload,
			}
		case 'COLUMN_DIRECTION_CHANGED':
			const column = state.sortedColumns.find((el) => el.id === action.columnId)
			const id = state.sortedColumns.indexOf(column)
			
			const newColumn = {
						...column,
						direction: action.payload
					}
			return {
				...state,
				sortedColumns: [
					...state.sortedColumns.slice(0, id),
					newColumn,
					...state.sortedColumns.slice(id + 1)
				]
			}
		case 'SEARCH_FILTER_SET':
			return {
				...state,
				searchFilter: action.payload
			}
		case 'IS_MARRIED_FILTER_SET':
			return {
				...state,
				isMarriedFilter: action.payload
			}
		case 'SHIRT_SIZES_FILTER_SET':
			return {
				...state,
				shirtSizeFilter: action.payload
			}
		// case 'NOTHING_MATCHED': {
		// 	return {
		// 		...state,
		// 		noMatchedData: action.payload
		// 	}
		// }
		// case 'PREV_DATA_APPLIED': {
		// 	return {
		// 		...state,
		// 		changedData: [...state.prevData],
		// 		prevData: [],
		// 	}
		// }
		// case 'PREV_DATA_STASHED': {
		// 	return {
		// 		...state,
		// 		prevData: action.payload,
		// 	}
		// }
		default: 
			return state
	}
}

export default reducer