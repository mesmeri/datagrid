import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundry from './components/error-boundry/error-boundry'
import App from './App';

import './styles/bootstrap.min.css'

const Application = () => {
	return (
		<ErrorBoundry>
			<App />
		</ErrorBoundry>
	)
}

ReactDOM.render(<Application />, document.getElementById('root'));

