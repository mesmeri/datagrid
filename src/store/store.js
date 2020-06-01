import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction'
import { saveState } from '../utils/local-storage'
import reducer from '../reducers/reducer'

const store = createStore(reducer, devToolsEnhancer())

store.subscribe(() => {
	const currentState = store.getState()
	const dataToSave = [{
		key: 'filters',
		data: currentState.filters
	},
	{
		key: 'columns',
		data: currentState.columns
	}]
	saveState(dataToSave)
});


export default store