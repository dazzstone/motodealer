import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { removeItem, addQuantity, subtractQuantity } from '../Store/Actions/actions';
import './cart.css';
import Recipe from './Receipt/receipt';

class Cart extends Component {

  handleRemove = (id) => {
    this.props.removeItem(id);
  }

  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  }

  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  }
  render() {

    let addedMotos = this.props.motos.length ?
      (
        this.props.motos.map(moto => {
          return (
                <tr key={moto.id}>
                  <td className="colm"><img src={moto.imageUrl} alt={moto.imageUrl} className="motoimg" /></td>
                  <td className="colm">{moto.title}</td>
                  <td className="colm">
                  <Link to="/cart"><img src="http://www.pngmart.com/files/8/Minus-Transparent-Background.png" className="arrow" onClick={() => { this.handleSubtractQuantity(moto.id) }}></img></Link>
                  <b className="quant">{moto.quantity}</b>
                  <Link to="/cart"><img src="https://img.icons8.com/metro/420/plus.png" className="arrow" onClick={() => { this.handleAddQuantity(moto.id) }}></img></Link>
                  </td>
                  <td className="colm">{moto.price}$</td>
                  <td className="colm">{moto.price * moto.quantity}$</td>
                  <td className="colm"><img src="https://www.searchpng.com/wp-content/uploads/2019/03/Hold-butt-715x715.png" className="remove" onClick={() => { this.handleRemove(moto.id) }}></img></td>
                </tr>
          )
        })
      ) :
      (
        <></>
      )
    return (
      <>
        <h5 className="order">Your order</h5>
        <table className="mototitle">
        <th className="colm">Image</th>
        <th className="colm">Title</th>
        <th className="colm">Quantity</th>
        <th className="colm">Price</th>
        <th className="colm">Total</th>
          {addedMotos}
        </table>
        <Link to="/receipt">
        <button className="check">Checkout</button>
        </Link>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    motos: state.addedItems,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => { dispatch(removeItem(id)) },
    addQuantity: (id) => { dispatch(addQuantity(id)) },
    subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)