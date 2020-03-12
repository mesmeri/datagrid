import React, { Component } from 'react';
import Table from './components/table/table'
import Header from './components/header/header'
import DataService from './services/data-service'
import Spinner from './components/spinner/spinner'
import Search from './components/search/search'
import { connect } from 'react-redux'
import { dataLoaded, toggleVirtualization } from './actions/actions'

class App extends Component {

  async componentDidMount() {
  	const dataService = new DataService()
  	const data = await dataService.getData()
  	this.props.dataLoaded(data)
  }

  handleToggleVirtualization = () => {
  	this.props.toggleVirtualization()
  }

  render () {
  	return (
	  	<>
		  	<Header handleToggleVirtualization={this.handleToggleVirtualization}/>
		  	<div className="container-fluid">
			  	<h1 className="text-center mb-3 mt-3">
			  		Table with mock data
			  	</h1>
		  		<div className="controls-block pt-3">
		  			<Search />
		  		</div>
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
	dataLoaded,
	toggleVirtualization
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
