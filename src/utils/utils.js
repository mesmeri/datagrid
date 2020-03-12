import _ from 'lodash'

const sortItems = (data, field, direction) => {
	const orderedData = _.orderBy(data, field, direction)
	return orderedData
}

export {
	sortItems,
}