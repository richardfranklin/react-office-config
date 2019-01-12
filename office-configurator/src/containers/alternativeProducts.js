import React, { Component } from 'react';
import { connect } from 'react-redux';

class AlternativeProducts extends Component {

    loopAlternatives(alternatives) {
        return alternatives.map(alt => {
            return (
                <li key={alt.productTitle}>
                    {alt.productTitle}
                </li>
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

export default connect(mapStateToProps)(AlternativeProducts);