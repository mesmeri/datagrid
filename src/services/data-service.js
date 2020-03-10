import mockData from './mock-data.json'

class DataService {
	getData () {
		return new Promise((resolve) => setTimeout(() => resolve(mockData), 1000))
	}
}

export default DataService