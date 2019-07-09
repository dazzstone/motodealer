import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import './cartitem.css';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

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