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
        console.log(newQuantity);
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
                    <div className="col-5">
                        <img src={prouctData.fullProductImageUrl} alt={prouctData.productTitle} className="selected-product__image"/>
                    </div>
                    <div className="col-7">
                        <h3>{prouctData.productTitle}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere enim ac arcu semper, a interdum sem ultrices. Sed vulputate interdum nulla ac fringilla. Etiam tincidunt ultricies sem sit amet tempor. Suspendisse potenti. Quisque et justo eros. In blandit iaculis libero non dapibus.</p>
                        <label>Qty: </label>
                            <input type="number" value={this.state.quantity} onChange={e => {
                                this.changeQuantity(this.props.selectedProductIndex, e.target.value)
                            }}>
                            </input>
                        
                        <p>£{prouctData.price}</p>
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