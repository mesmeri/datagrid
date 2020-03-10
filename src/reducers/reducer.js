const initialState = {
	data: [],
	loading: true,
	virtualization: true,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'DATA_LOADED':
			return {
				data: action.payload,
				loading: false,
				virtualization: true,
			}
		case 'TOGGLE_VIRTUALIZATION': 
			return {
				data: state.data,
				loading: false,
				virtualization: !state.virtualization,
			}
		default: 
			return state
	}
}

export default reducer