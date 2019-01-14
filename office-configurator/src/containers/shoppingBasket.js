import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingBasket extends Component {

    renderBasketList(categories) {
        if (categories.length > 0) {
            return categories.map(category => {
                const productQuantity = this.getQuantity(category.product);

                return <li key={category.product.id}>
                    {productQuantity}X {category.product.productTitle}&nbsp;-&nbsp;
                    £{this.getCombinedPrice(category.product)}
                </li>
            });
        }
    }

    getCombinedPrice(category) {
        return category.price * this.getQuantity(category);
    }

    getQuantity(category) {
        if (category.hasOwnProperty('quantity')) {
            return category.quantity;
        }
        else {
            return this.props.numberOfEmployees;
        }
    }

    getTotalPrice(categories) {
        if (categories.length > 0) {
            return categories.reduce((accumulator, currentCategory) => {
                return (this.getCombinedPrice(currentCategory.product)) + accumulator;
            }, 0)
        }
    }

    render() {
        if (this.props.categories !== undefined) {
            return (
                <div>
                    <ul>
                        { this.renderBasketList(this.props.categories) }
                    </ul>
                    <p>Total: £{this.getTotalPrice(this.props.categories)}</p>
                </div>
            )
        }
        else {
            return <p>Loading...</p>
        }

    }
}

function mapStateToProps({ categories, numberOfEmployees }) {
    return {
        categories,
        numberOfEmployees
    };
}

export default connect(mapStateToProps)(ShoppingBasket);