import { sortItems, findMatches } from '../utils/utils'
import DataService from '../services/data-service'

const service = new DataService()

const getDisplayData = (state) => {
	const { data } = state.general 
	const { searchFilter, isMarriedFilter, shirtSizeFilter } = state.filters
	const { sortedColumns } = state.columns
	let result = [...data]

	if (sortedColumns.length !== 0) {
		const fields = sortedColumns.map(el => {
			return service.mapStrToDataField(el.id)
		})

		const directions = sortedColumns.map(el => {
			return el.direction
		})

		const sorted = sortItems(result, fields, directions)
		result = sorted
	}

	if (searchFilter !== '') {
		const matched = findMatches(result, searchFilter, 'search')
		result = matched
	}

	if (isMarriedFilter) {
		const matched = findMatches(result, isMarriedFilter, 'isMarried')
		result = matched
	}

	if (shirtSizeFilter.length !== 0) {
		const matched = findMatches(result, shirtSizeFilter, 'shirtSize')
		result = matched
	}

	return result
}

export default getDisplayData