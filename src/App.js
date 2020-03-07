import React from 'react';
import Table from './components/table/table'
import DataService from './services/data-service'
import Header from './components/header/header'

const App = () => {
	const service = new DataService();
	const data = service.getData();

  return (
  	<>
	  	<Header />
	  	<div className="container-fluid">
		  	<h1 className="mb-4 mt-5">
		  		Table with mock data
		  	</h1>
		  	<Table data={ data } />
		</div>
	</>
  );
}

export default App;
