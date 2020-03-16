const initialState = {
	data: [],
	sortedColumns: [],
	hiddenColumns: [],
	selectedRows: [],
	loading: true,
	virtualization: true,
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
		case 'SINGLE_ROW_SELECTED':
			return {
				...state,
				selectedRows: [
					action.payload,
				]
			}
		case 'MULTIPLE_ROWS_SELECTED':
			return {
				...state,
				selectedRows: [
					...state.selectedRows,
					action.payload,
				]
			}
		case 'ROWS_DELETED':
			const dataWithoutDeletedRows = [...state.data]
			state.selectedRows.forEach(el => {
				const rowIndex = dataWithoutDeletedRows.findIndex(item => item.id === el)
				dataWithoutDeletedRows.splice(rowIndex, 1)
			})
			return {
				...state,
				data: dataWithoutDeletedRows,
				selectedRows: [],
			}
		case 'COLUMN_WAS_HIDDEN':
			return {
				...state,
				hiddenColumns: [
					...state.hiddenColumns,
					action.payload,
					]
			}
		case 'COLUMN_WAS_SHOWN':
			const index = state.hiddenColumns.indexOf(action.payload)
			return {
				...state,
				hiddenColumns: [
					...state.hiddenColumns.slice(0, index),
					...state.hiddenColumns.slice(index + 1),
					]
			}
		default: 
			return state
	}
}

export default reducer