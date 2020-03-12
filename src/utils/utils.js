import _ from 'lodash'

const sortItems = (data, field, direction) => {
	const orderedData = _.orderBy(data, field, direction)
	return orderedData
}

const findMatches = (data, value) => {
	const resultData = data.filter(el => {
		const values = Object.values(el)
		const index = values.findIndex(item => {
			if (typeof item === 'string') {
				return item.toLowerCase().includes(value.toLowerCase())
			}
		})
		if (index >= 0) {
			return el
		}
	})
	return resultData
}

export {
	sortItems,
	findMatches,
}