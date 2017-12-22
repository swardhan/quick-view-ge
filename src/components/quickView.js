import React, { Component } from 'react';
import closePopup from '../actions/closePopup.js';
import './quickview.css';
import './popup.css';

class QuickView extends Component {
    constructor(){
        super();
        this.state = {
            value: -1
        }
    }
  render() {
    return(
      <div className='modal'>
        <div className='modal-inner'>
            <div id='quickview'>
              <div id='prev'><i className='fa fa-chevron-left fa-5x'></i></div>
                <div className='content'>
                  <i className="fa fa-times" onClick={ () => this.props.store.dispatch(closePopup()) }></i>
                    Column 2, {this.state.value}
                </div>
              <div id='next'><i className='fa fa-chevron-right fa-5x'></i></div>
            </div>
        </div>
      </div>
    )
  }
}

export default QuickView;