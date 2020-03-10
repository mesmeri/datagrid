const initialState = {
	data: [],
	loading: true,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'DATA_LOADED':
			return {
				data: action.payload,
				loading: false,
			}
		default: 
			return state
	}
}

export default reducer