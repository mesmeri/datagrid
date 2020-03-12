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

const dataChanged = (changedData) => {
	return {
		type: 'DATA_CHANGED',
		payload: changedData,
	}
}

const columnDirectionChanged = (direction, columnId) => {
	return {
		type: 'COLUMN_DIRECTION_CHANGED',
		payload: direction,
		columnId: columnId,
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
}