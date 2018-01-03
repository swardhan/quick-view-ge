import React, { Component } from 'react';
import { connect } from 'react-redux';
import showQuickView from '../actions/showQuickView';
import QuickView from './quickView';
import closePopup from '../actions/closePopup';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        let url = 'https://dev.goodearth.in/myapi/search/';
        axios.get(url)
            .then(response => {
                this.setState({
                    products: response.data.results.data
                });
            })
    }

    findPopup(popupType, data) {
        switch(popupType) {
            case 'quick-view':
                return <QuickView store = {this.props.store} products={data.products} index={data.index}/>;
            default:
                return null;
        }

    }

    render() {
        let temp = this.findPopup(
                this.props.popup.type,
                {products: this.state.products, index: this.props.popup.index}
            );
        let arr = [];
        this.state.products.forEach(function(product, index){
            arr.push(
                <div key = {index}>
                    <button onClick={() => {
                        this.props.showQuickView(this.state.products, index);
                    }} index={index}>{index+1}</button>
                    <div>
                        {product.title}
                    </div>
                </div>
            )
        }, this);
        return(
            <div>
                {
                    arr.map(function(item){
                        return item
                        }
                    )
                }
                {temp}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        popup: {
            type: state.popup.type,
            index: state.popup.index,
            products: state.popup.products
        }
    };
}

export default connect(mapStateToProps, {showQuickView, closePopup} )(App);
