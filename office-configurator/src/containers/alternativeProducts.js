import React, { Component } from 'react';
import { connect } from 'react-redux';
import alternativeSelected from '../actions/alternativeSelected';

class AlternativeProducts extends Component {

    alternativeClicked(alternative, index) {
        this.props.alternativeSelected(this.props.categoryIndex, index, alternative);
    }

    loopAlternatives(alternatives) {
        return alternatives.map((alternative, index) => {
            return (
                <div className="alt-products">
                    <li key={alternative.productTitle} onClick={() => {this.alternativeClicked(alternative, index)}}>
                        {alternative.productTitle} - £{alternative.price}
                    </li>
                </div>
            )
        });
    }

    render() {
        return this.loopAlternatives(this.props.alternatives);
    }
}

function mapStateToProps({ categories }) {
    return { categories: categories };
}

export default connect(mapStateToProps, { alternativeSelected })(AlternativeProducts);