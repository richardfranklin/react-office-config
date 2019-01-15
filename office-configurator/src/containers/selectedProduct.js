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
                <div key={prouctData.id}>
                <img width="100" src={prouctData.fullProductImageUrl} alt={prouctData.productTitle} />
                    <h3>{prouctData.productTitle}</h3>
                    <span>Qty: <input type="number" value={this.state.quantity} onChange={() => {this.changeQuantity(this.props.selectedProductIndex, 11)}}></input></span>
                    <span>£{prouctData.price}</span>
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