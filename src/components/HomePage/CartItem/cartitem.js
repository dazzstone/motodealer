import React, { Component } from 'react';
import { connect } from 'react-redux';
import './cartitem.css';

class CartItem extends Component {

  render () {
    const itemsCount = this.props.itemsCount;

    return (
          <div className="counter">
            {itemsCount}
          </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    itemsCount: state.addedItems.length
  }
}
export default connect(mapStateToProps, null)(CartItem)