import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedProduct from './selectedProduct';
import AlternativeProducts from './alternativeProducts';
import ShoppingBasket from './shoppingBasket';
import fetchPage from '../actions/fetchPage';

class CategoriesContainer extends Component {
	
	componentWillMount() {
        this.props.fetchPage();
	}
	
	getCategories() {
		if (this.props.categories.length > 0) return this.props.categories;
		return null;
	}

	getCategoryItems() {
		if (this.getCategories() !== null) {
			return this.getCategories().map((categoryItem, categoryIndex) => {
				return (
					<div key={categoryItem.name}>
						<div>
							<SelectedProduct categoryData={categoryItem} selectedProductIndex={categoryIndex} />
						</div>
						<br /><br />
						<div>
							<AlternativeProducts alternatives={categoryItem.alternatives} categoryIndex={categoryIndex} />
						</div>
						<hr />
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
				<div className="selected-product">
					{ categoriesMarkup }
				</div>
				<div>
					<ShoppingBasket />
				</div>
			</div>
        );

    }
}

function mapStateToProps({ categories }) {
    return { categories: categories };
}

export default connect(mapStateToProps, { fetchPage })(CategoriesContainer);