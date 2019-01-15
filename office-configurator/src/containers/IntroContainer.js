import React, { Component } from 'react';
import { connect } from 'react-redux';

class IntroContainer extends Component {

    render() {
		if (typeof this.props.name === 'string') {
			return (
				<header class="main__header">
					<div class="row">
						<div class="col-8">
							<h1>{this.props.name}</h1>
							<p>{this.props.description}</p>
							{/* <p>{this.props.numberOfEmployees}</p> */}
						</div>

						<div class="col-4 main__header-right">
						<button class="btn btn-primary ripple add-to-cart-btn" type="submit" id="addToBasketTop" title="Add to basket" data-add-to-cart="true">
							<i class="add-to-cart-btn__icon fa fa-shopping-cart" aria-hidden="true"></i>
							<span class="product-add-to-cart-panel__text">Add to basket</span>
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