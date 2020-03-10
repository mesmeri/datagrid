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

export {
	dataLoaded,
	toggleVirtualization
}