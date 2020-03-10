import React from 'react';
import Table from './components/table/table'
import Header from './components/header/header'
import DataService from './services/data-service'
import Spinner from './components/spinner/spinner'
import { connect } from 'react-redux'
import { dataLoaded } from './actions/actions'

class App extends React.Component {

  async componentDidMount() {
  	const dataService = new DataService()
  	const data = await dataService.getData()
  	this.props.dataLoaded(data)
  }

  render () {

  	return (
	  	<>
		  	<Header />
		  	<div className="container-fluid">
			  	<h1 className="text-center mb-4 mt-5">
			  		Table with mock data
			  	</h1>
			  	<main className="pt-5">
			  		{ this.props.loading ? <Spinner /> : <Table />}
			  	</main>
			</div>
		</>
	)
  }
}

const mapStateToProps = ({ loading }) => {
	return {
		loading
	}
}

const mapDispatchToProps = {
	dataLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
