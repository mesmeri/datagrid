import { loadState } from '../utils/local-storage'
import updateColumns from './update-columns'
import updateFilters from './update-filters'
import updateGeneral from './update-general'

const initialState = loadState()

const reducer = (state = initialState, action) => {
	return {
		columns: updateColumns(state, action),
		filters: updateFilters(state, action),
		general: updateGeneral(state, action)
	}
}

export default reducer