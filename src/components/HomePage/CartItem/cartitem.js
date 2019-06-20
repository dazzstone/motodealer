import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import './cartitem.css';

class CartItem extends Component {

  render () {
    const itemsCount = this.props.itemsCount;

    return (
    <div className="fixblock">
    <Link to="/cart">
          <img src="http://cdn.onlinewebfonts.com/svg/img_264677.png" className="cartimg"></img>
          <div className="counter">
            {itemsCount}
          </div>
    </Link>
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