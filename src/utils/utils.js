import _ from 'lodash'

const sortItems = (data, fields, directions) => {
	const orderedData = _.orderBy(data, fields, directions)
	return orderedData
}

const findMatches = (data, value, type) => {
	let resultData = null
	switch (type) {
		case 'search':
			resultData = data.filter(el => {
				const values = Object.values(el)
				const index = values.findIndex(item => {
					if (typeof item === 'string') {
						return item.toLowerCase().includes(value.toLowerCase())
					}
					return false
				})
				if (index >= 0) {
					return el
				}
				return false
			})
			break
		case 'isMarried':
			resultData = data.filter(el => {
				return el[type]
			})
			break
		case 'shirtSize':
			resultData = data.filter(el => {
				return value.includes(el[type])
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