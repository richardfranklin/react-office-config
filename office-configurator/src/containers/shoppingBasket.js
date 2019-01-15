import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingBasket extends Component {

    renderBasketList(categories) {
        if (categories.length > 0) {
            return categories.map(category => {
                return <li key={category.product.id}>
                    {category.quantity}X {category.product.productTitle}&nbsp;-&nbsp;
                    £{parseFloat(this.getCombinedPrice(category).toFixed(2))}
                </li>
            });
        }
    }

    getCombinedPrice(category) {
        return category.product.price * category.quantity;
    }

    getTotalPrice(categories) {
        if (categories.length > 0) {
            return parseFloat(categories.reduce((accumulator, currentCategory) => {
                return (this.getCombinedPrice(currentCategory)) + accumulator;
            }, 0).toFixed(2))
        }
    }

    render() {

        if (this.props.categories !== undefined) {
            return (
                <div className="shopping-basket">
                    <div className="container">
                        <div className="row">
                            <div className="shopping-basket__list-container">
                                <ul className="shopping-basket__list">
                                    { this.renderBasketList(this.props.categories) }
                                </ul>
                                <p>Total: £{this.getTotalPrice(this.props.categories)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return <p>Loading...</p>
        }

    }
}

function mapStateToProps({ name, categories, numberOfEmployees }) {
    return {
        name,
        categories,
        numberOfEmployees
    };
}

export default connect(mapStateToProps)(ShoppingBasket);