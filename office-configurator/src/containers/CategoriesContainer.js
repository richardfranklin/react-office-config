import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedProduct from './selectedProduct';
import AlternativeProducts from './alternativeProducts';
import ShoppingBasket from './shoppingBasket';
import fetchPage from '../actions/fetchPage';

class CategoriesContainer extends Component {
	
	componentWillMount() {
		var urlParams = new URLSearchParams(window.location.search);
		const noOfEmployees = urlParams.get('numberOfEmployees');
		const profile = urlParams.get('profile');
		
        this.props.fetchPage(noOfEmployees, profile);
	}
	
	getUrlParams(search) {
		let hashes = search.slice(search.indexOf('?') + 1).split('&')
		return hashes.reduce((params, hash) => {
			let [key, val] = hash.split('=')
			return Object.assign(params, {[key]: decodeURIComponent(val)})
		}, {})
	  }

	getCategories() {
		if (this.props.categories.length > 0) return this.props.categories;
		return null;
	}

	getCategoryItems() {
		if (this.getCategories() !== null) {
			return this.getCategories().map((categoryItem, categoryIndex) => {
				return (
					<div key={categoryItem.name} className="row list-items__product">
						<div className="col-8">
							<SelectedProduct categoryData={categoryItem} selectedProductIndex={categoryIndex} />
						</div>
						<div className="col-4 alt-products">
							<h3>Alternative Products</h3>
							<AlternativeProducts alternatives={categoryItem.alternatives} categoryIndex={categoryIndex} />

							<div className="alt-products__search input-group">
								<p className="alt-products__search-text">Find by Viking Number</p>
								<input type="search" className="form-control alt-products__search-input" id="headerSearchInput" name="text" maxLength="100" aria-label="Search for item" autoComplete="off" />
								<div className="input-group-append">
									<button className="btn btn-primary ripple search-bar__submit" type="submit" id="headerSearchSubmit" title="Submit search">
										<span className="sr-only">Submit search</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				)
			});
		} else {
			return 'Loading Category...';
		}
	}

    render() {
		const categoriesMarkup = this.getCategoryItems();

        return (
			<div>
				<div className="list-items">
					{ categoriesMarkup }
				</div>
				<div>
					<ShoppingBasket />
				</div>
				<div className="bottom-cta-container">
				<button className="btn btn-primary ripple add-to-cart-btn" type="submit" id="addToBasketTop" title="Add to basket" data-add-to-cart="true">
					<i className="add-to-cart-btn__icon fa fa-shopping-cart" aria-hidden="true"></i>
					<span className="product-add-to-cart-panel__text">
						Add to basket
					</span>
				</button>
				</div>
			</div>
        );

    }
}

function mapStateToProps({ categories }) {
    return { categories: categories };
}

export default connect(mapStateToProps, { fetchPage })(CategoriesContainer);