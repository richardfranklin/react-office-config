import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingBasket extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            expandState: false
        }
    }

    renderBasketList(categories) {
        if (categories.length > 0) {
            return categories.map(category => {
                return <li key={category.product.id}>
                    <strong>{category.quantity}X</strong> {category.product.productTitle}&nbsp;-&nbsp;
                    <span className="shopping-basket__list-price">£{parseFloat(this.getCombinedPrice(category)).toFixed(2)}</span>
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

    expandClick() {
        if (this.state.expandState === true) {
            this.setState({ expandState: false });
        } else {
            this.setState({ expandState: true });
        }
    }

    render() {
        const profileType = typeof(this.props.name) === 'string' ? this.props.name : '';
        const expanderClass = this.state.expandState === true ? ' shopping-basket__list-inner-container--is-open' : ' shopping-basket__list-inner-container--is-closed'
        const expanderButtonClass = this.state.expandState === true ? ' shopping-basket__expander--is-open' : ' shopping-basket__expander--is-closed'

        if (this.props.categories !== undefined) {
            return (
                <div className="shopping-basket">
                    <div className="shopping-basket__list-container">
                        <span className={"shopping-basket__expander" + expanderButtonClass} onClick={() => this.expandClick()}>^</span>
                        <h4 className="shopping-basket__title">{profileType} build package overview</h4>
                        <p className="shopping-basket__description">Below is a summary of all products in your current package:</p>
                        <div className={"shopping-basket__list-inner-container" + expanderClass}>
                            <ul className="shopping-basket__list">
                                { this.renderBasketList(this.props.categories) }
                            </ul>

                            <button className="btn btn-secondary ripple add-to-cart-btn" type="submit" id="addToBasketTop" title="Add to basket" data-add-to-cart="true">
                                <i className="add-to-cart-btn__icon fa fa-shopping-cart" aria-hidden="true"></i><span className="product-add-to-cart-panel__text">
                                    Add to basket
                                </span>
                            </button>

                        </div>
                        <span className="shopping-basket__total">
                            Total: <span className="shopping-basket__total-value">£{this.getTotalPrice(this.props.categories)}</span>
                        </span>
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