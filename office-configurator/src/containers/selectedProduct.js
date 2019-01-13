import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedProduct extends Component {
    changeNumber() {
        console.log('Changed');
    }

    render() {
        if (this.props.productData !== undefined) {
            return (
                <div key={this.props.productData.id}>
                <img width="100" src={this.props.productData.fullProductImageUrl} alt={this.props.productData.productTitle} />
                    <h3>{this.props.productData.productTitle}</h3>
                    <span>Qty: <input type="number" value={this.props.numberOfEmployees} onChange={() => {this.changeNumber()}}></input></span>
                    <span>£{this.props.productData.price}</span>
                </div>
            )
        }
        else {
            return <p>Loading...</p>
        }

    }
}

function mapStateToProps({ numberOfEmployees }) {
    return {
        numberOfEmployees
    };
}

export default connect(mapStateToProps)(SelectedProduct);