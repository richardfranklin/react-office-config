import React, { Component } from 'react';
import { connect } from 'react-redux';

class IntroContainer extends Component {

    render() {
		if (typeof this.props.name === 'string') {
			return (
				<div>
					<h1>{this.props.name}</h1>
					<p>{this.props.description}</p>
					<p>{this.props.numberOfEmployees}</p>
				</div>
				
			)
        }
        else {
            return <p>Loading...</p>
        }

    }
}

function mapStateToProps({ name, description, numberOfEmployees }) {
    return { 
		name,
		description,
		numberOfEmployees
	};
}

export default connect(mapStateToProps)(IntroContainer);