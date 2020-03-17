const updateColumns = (state, action) => {
	switch (action.type) {
		case 'COLUMN_SELECTED':
			return {
				...state.columns,
				sortedColumns: [
					...state.columns.sortedColumns,
					action.payload
				],
			}
		case 'COLUMN_UNSELECTED':
			const ind = state.columns.sortedColumns.findIndex((el) => el.id === action.payload)
			const newSortedColumns = [
				...state.columns.sortedColumns.slice(0, ind),
				...state.columns.sortedColumns.slice(ind + 1)
				]
			return {
				...state.columns,
				sortedColumns: newSortedColumns,
			}	
		case 'COLUMN_CLEARED_ALL':
			return {
				...state.columns,
				sortedColumns: [],
			}
		case 'COLUMN_DIRECTION_CHANGED':
			const column = state.columns.sortedColumns.find((el) => el.id === action.columnId)
			const id = state.columns.sortedColumns.indexOf(column)
			const newColumn = {
						...column,
						direction: action.payload
					}
			return {
				...state.columns,
				sortedColumns: [
					...state.columns.sortedColumns.slice(0, id),
					newColumn,
					...state.columns.sortedColumns.slice(id + 1)
				],
			}
		case 'COLUMN_WAS_HIDDEN':
			return {
				...state.columns,
				hiddenColumns: [
					...state.columns.hiddenColumns,
					action.payload,
				]
			}
		case 'COLUMN_WAS_SHOWN':
			const index = state.columns.hiddenColumns.indexOf(action.payload)
			return {
				...state.columns,
				hiddenColumns: [
					...state.columns.hiddenColumns.slice(0, index),
					...state.columns.hiddenColumns.slice(index + 1),
				]
			}
		default: 
			return state.columns
	} 
}

export default updateColumns