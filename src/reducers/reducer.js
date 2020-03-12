const initialState = {
	data: [],
	changedData: [],
	loading: true,
	virtualization: true,
	selectedColumns: [],
	noMatchedData: false,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'DATA_LOADED':
			return {
				...state,
				data: action.payload,
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
				selectedColumns: [
					...state.selectedColumns,
					action.payload
				],
			}
		case 'COLUMN_UNSELECTED':
			const ind = state.selectedColumns.find((el) => el.id = action.columnId)
			const newSelectedColumns = [
				...state.selectedColumns.slice(0, ind),
				...state.selectedColumns.slice(ind + 1)
				]
			return {
				...state,
				selectedColumns: newSelectedColumns,
			}
		case 'COLUMN_CLEARED_ALL':
			return {
				...state,
				selectedColumns: [],
			}
		case 'DATA_CHANGED':
			return {
				...state,
				changedData: action.payload,
			}
		case 'COLUMN_DIRECTION_CHANGED':
			const column = state.selectedColumns.find((el) => el.id === action.columnId)
			const id = state.selectedColumns.indexOf(column)
			const newColumn = {
						...column,
						direction: action.payload
					}
			return {
				...state,
				selectedColumns: [
					...state.selectedColumns.slice(0, id),
					newColumn,
					...state.selectedColumns.slice(id + 1)
				]
			}
		case 'NOTHING_MATCHED': {
			return {
				...state,
				noMatchedData: action.payload
			}
		}
		default: 
			return state
	}
}

export default reducer