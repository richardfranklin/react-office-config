import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchDesks from '../actions/fetchDesks';

class DesksContainer extends Component {
	
	componentWillMount() {
        this.props.fetchDesks();
    }

	getDesks() {
		if (this.props.desks.length > 0) return this.props.desks;
		return [];
	}

    render() {
		
		const deskList = this.getDesks().map(deskItem => {
			return <li key={deskItem.id}>{deskItem.productTitle}</li>;
		});

        return (
			<div>
				<p>Test Content here</p>
				<ul>
				{
					deskList
				}
				</ul>
			</div>
        );

    }
}

function mapStateToProps({ desks }) {
    return { desks: desks };
}

export default connect(mapStateToProps, { fetchDesks })(DesksContainer);