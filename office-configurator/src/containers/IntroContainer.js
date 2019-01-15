import React, { Component } from 'react';
import { connect } from 'react-redux';

class IntroContainer extends Component {

    render() {
		if (typeof this.props.name === 'string') {
			return (
				<header className="main__header">
					<div className="row">
						<div className="col-8">
							<h1>Lets start creating your {this.props.name}</h1>
							<p>{this.props.description}</p>
							{/*<p>{this.props.numberOfEmployees}</p>*/}
						</div>

						<div className="col-4 main__header-right">
						<button className="btn btn-primary ripple add-to-cart-btn" type="submit" id="addToBasketTop" title="Add to basket" data-add-to-cart="true">
							<i className="add-to-cart-btn__icon fa fa-shopping-cart" aria-hidden="true"></i>
							<span className="product-add-to-cart-panel__text">Add to basket</span>
						</button>
						</div>
					</div>
				</header>	
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