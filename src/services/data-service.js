import mockData from './mock-data.json'

class DataService {
	getData () {
		return new Promise((resolve) => setTimeout(() => resolve(mockData), 100))
	}

	mapStrToDataField (str) {
		switch (str) {
			case 'Number':
				return 'id'
			case 'First name':
				return 'firstName'
			case 'Last name':
				return 'lastName'
			case 'Gender':
				return 'gender'
			case 'Married':
				return 'isMarried'
			case 'Points':
				return 'points'
			case 'Shirt size':
				return 'shirtSize'
			default:
		}
	}
}

export default DataService