import { sortItems, findMatches } from '../utils/utils'
import DataService from '../services/data-service'

const service = new DataService()

const getDisplayData = (state) => {
	const { data, sortedColumns, searchFilter, isMarriedFilter, shirtSizeFilter } = state
	let result = [...data]

	if (sortedColumns.length !== 0) {
		const field = service.mapStrToDataField(sortedColumns[0].id)
		const sorted = sortItems(result, field, sortedColumns[0].direction)
		result = sorted
	}

	if (searchFilter !== '') {
		const matched = findMatches(result, searchFilter)
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