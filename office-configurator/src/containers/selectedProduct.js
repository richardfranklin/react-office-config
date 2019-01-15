import React, { Component } from 'react';
import { connect } from 'react-redux';
import productQuantityChanged from '../actions/productQuantityChanged';
class SelectedProduct extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            quantity: this.props.categoryData.quantity
        }
    }

    changeQuantity(categoryIndex, newQuantity) {
        this.setState({ quantity: newQuantity }, () => {
            this.props.productQuantityChanged(categoryIndex, this.state.quantity);
        });
    }

    render() {
        const categoryData = this.props.categoryData;
        const prouctData = categoryData.product;

        if (prouctData !== undefined) {
            return (
                <div key={prouctData.id} className="row selected-product">
                    <div className="col-5 selected-product__image-block">
                        <img src={prouctData.fullProductImageUrl} alt={prouctData.productTitle} className="selected-product__image"/>
                    </div>
                    <div className="col-7">
                        <h3>{prouctData.productTitle}</h3>
                        <p className="selected-product__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere enim ac arcu semper, a interdum sem ultrices. Sed vulputate interdum nulla ac fringilla. Etiam tincidunt ultricies sem sit amet tempor. Suspendisse potenti. Quisque et justo eros. In blandit iaculis libero non dapibus.</p>
                        <div className="selected-product__qty">
                            <label>Qty: </label>
                            <input type="number" className="form-control input-width--xsmall product-add-to-cart-panel__input" value={this.state.quantity} onChange={e => {
                                this.changeQuantity(this.props.selectedProductIndex, e.target.value)
                            }}/>
                            <i className="selected-product__remove far fa-trash-alt" aria-hidden="true"></i>
                        </div>

                        <p className="selected-product__unit-price">£{parseFloat(prouctData.price).toFixed(2)} per unit</p>
                        <p className="selected-product__total-price">£{parseFloat(prouctData.price * this.state.quantity).toFixed(2)}</p>
                    </div>
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

export default connect(mapStateToProps, { productQuantityChanged })(SelectedProduct);