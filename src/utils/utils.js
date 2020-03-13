import _ from 'lodash'

const sortItems = (data, field, direction) => {
	const orderedData = _.orderBy(data, field, direction)
	return orderedData
}

const findMatches = (data, value, field) => {
	let resultData = null
	switch (typeof value) {
		case 'string':
			resultData = data.filter(el => {
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
			break
		case 'boolean':
			resultData = data.filter(el => {
				return el[field]
			})
			break
		default:

	}
	return resultData
}

export {
	sortItems,
	findMatches,
}