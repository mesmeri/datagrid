const dataLoaded = (data) => {
	return {
		type: 'DATA_LOADED',
		payload: data,
	}
}

export {
	dataLoaded
}