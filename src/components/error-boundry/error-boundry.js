import React, { Component } from 'react'
import ErrorMessage from '../error-message/error-message'

class ErrorBoundry extends Component {

	state = {
		error: false,
	}

	componentDidCatch (error) {
		this.setState( {
			error: true,
		})
	} 

	render () {
		if (this.state.error) {
			return (
				<ErrorMessage />
			)
		}
		
		return (this.props.children)
	}
}

export default ErrorBoundry