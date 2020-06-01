const updateGeneral = (state, action) => {
	switch (action.type) {
		case 'DATA_LOADED':
			return {
				...state.general,
				data: action.payload,
				loading: false
			}
		case 'TOGGLE_VIRTUALIZATION': 
			return {
				...state.general,
				virtualization: !state.general.virtualization,
			}
		case 'SINGLE_ROW_SELECTED':
			return {
				...state.general,
				selectedRows: [
					action.payload,
				]
			}
		case 'MULTIPLE_ROWS_SELECTED':
			return {
				...state.general,
				selectedRows: [
					...state.general.selectedRows,
					action.payload,
				]
			}
		case 'ROWS_DELETED':
			const dataWithoutDeletedRows = [...state.general.data]
			state.general.selectedRows.forEach(el => {
				const rowIndex = dataWithoutDeletedRows.findIndex(item => item.id === el)
				dataWithoutDeletedRows.splice(rowIndex, 1)
			})
			return {
				...state.general,
				data: dataWithoutDeletedRows,
				selectedRows: [],
			}
		default:
			return state.general
	}
}

export default updateGeneral