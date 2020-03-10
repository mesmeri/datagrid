import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ErrorBoundry from './components/error-boundry/error-boundry'
import App from './App'

import store from './store/store'

import './styles/bootstrap.min.css'
console.log(store)

const Application = () => {
	return (
		<Provider store={store}>
			<ErrorBoundry>
				<App />
			</ErrorBoundry>
		</Provider>
	)
}

ReactDOM.render(<Application />, document.getElementById('root'));

