import React, { Component } from 'react';
import { connect } from 'react-redux';
import alternativeSelected from '../actions/alternativeSelected';

class AlternativeProducts extends Component {

    alternativeClicked(alternative, index) {
        this.props.alternativeSelected(this.props.categoryIndex, index, alternative);
    }

    loopAlternatives(alternatives) {
        return alternatives.map((alternative, index) => {
            console.log();
            return (
                <li key={alternative.productTitle} onClick={() => {this.alternativeClicked(alternative, index)}} className="alt-products__item">
                    <div className="row">
                        <div className="col-3">
                            <img src={alternative.fullProductImageUrl} alt={alternative.productTitle} />
                        </div>

                        <div className="col-9">
                            <h4 className="alt-products__title">{alternative.productTitle} </h4>
                            <p className="alt-products__price">£{alternative.price} <span>per unit</span></p>
                            <p className="alt-products__upgrade">Upgrade to this ></p>
                        </div>
                    </div>
                    
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

export default connect(mapStateToProps, { alternativeSelected })(AlternativeProducts);