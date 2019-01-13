import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedProduct from './SelectedProduct';
import AlternativeProducts from './AlternativeProducts';
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
							<SelectedProduct productData={categoryItem.product} />
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
			<div className="selected-product">
				{ categoriesMarkup }
			</div>
        );

    }
}

function mapStateToProps({ categories }) {
    return { categories: categories };
}

export default connect(mapStateToProps, { fetchPage })(CategoriesContainer);