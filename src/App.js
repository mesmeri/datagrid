import React, { Component } from 'react';
import Table from './components/table/table'
import Header from './components/header/header'
import DataService from './services/data-service'
import Spinner from './components/spinner/spinner'
import ControlBar from './components/control-bar/control-bar'
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
			</div>
			<div className="container-fluid">
			  	<main className="pt-1">
		  			<ControlBar />
			  		{ this.props.loading ? <Spinner /> : <Table />}
			  	</main>
			</div>
		</>
	)
  }
}

const mapStateToProps = ({ general: { loading }}) => {
	return {
		loading
	}
}

const mapDispatchToProps = {
	dataLoaded,
	toggleVirtualization
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
