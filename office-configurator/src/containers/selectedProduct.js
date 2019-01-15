import React, { Component } from 'react';
import { connect } from 'react-redux';
import productQuantityChanged from '../actions/productQuantityChanged';
class SelectedProduct extends Component {

    changeNumber(categoryIndex, newQuantity) {
        this.props.productQuantityChanged(categoryIndex, newQuantity);
    }

    render() {
        const categoryData = this.props.categoryData;
        const prouctData = categoryData.product;
        console.log(categoryData);

        if (prouctData !== undefined) {
            return (
                <div key={prouctData.id}>
                <img width="100" src={prouctData.fullProductImageUrl} alt={prouctData.productTitle} />
                    <h3>{prouctData.productTitle}</h3>
                    <span>Qty: <input type="number" value={categoryData.quantity} onChange={() => {this.changeNumber(this.props.selectedProductIndex, 11)}}></input></span>
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