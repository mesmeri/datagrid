const dataLoaded = (data) => {
	return {
		type: 'DATA_LOADED',
		payload: data,
	}
}

const toggleVirtualization = () => {
	return {
		type: 'TOGGLE_VIRTUALIZATION',
	}
}

const columnSelected = (columnId) => {
	return {
		type: 'COLUMN_SELECTED',
		payload: {
			id: columnId,
			direction: 'asc',
		}
	}
}

const columnUnselected = (columnId) => {
	return {
		type: 'COLUMN_UNSELECTED',
		payload: columnId,
	}
}

const columnClearedAll = () => {
	return {
		type: 'COLUMN_CLEARED_ALL',
	}
}

const dataChanged = (data) => {
	return {
		type: 'DATA_CHANGED',
		payload: data,
	}
}

const columnDirectionChanged = (direction, columnId) => {
	return {
		type: 'COLUMN_DIRECTION_CHANGED',
		payload: direction,
		columnId: columnId,
	}
}

const searchFilterSet = (value) => {
	return {
		type: 'SEARCH_FILTER_SET',
		payload: value,
	}
}

const isMarriedFilterSet = (value) => {
	return {
		type: 'IS_MARRIED_FILTER_SET',
		payload: value,
	}
}

const shirtSizesFilterSet = (value) => {
	return {
		type: 'SHIRT_SIZES_FILTER_SET',
		payload: value,
	}
}

const singleRowSelected = (rowId) => {
	return {
		type: 'SINGLE_ROW_SELECTED',
		payload: rowId,
	}
} 

const multipleRowsSelected = (rowId) => {
	return {
		type: 'MULTIPLE_ROWS_SELECTED',
		payload: rowId,
	}
} 

const rowsDeleted = () => {
	return {
		type: 'ROWS_DELETED',
	}
}

const columnWasHidden = (columnId) => {
	return {
		type: 'COLUMN_WAS_HIDDEN',
		payload: columnId,
	}
}

const columnWasShown = (columnId) => {
	return {
		type: 'COLUMN_WAS_SHOWN',
		payload: columnId,
	}
}

export {
	dataLoaded,
	toggleVirtualization,
	columnSelected,
	columnUnselected,
	columnClearedAll,
	dataChanged,
	columnDirectionChanged,
	searchFilterSet,
	isMarriedFilterSet,
	shirtSizesFilterSet,
	singleRowSelected,
	multipleRowsSelected,
	rowsDeleted,
	columnWasHidden,
	columnWasShown,
}