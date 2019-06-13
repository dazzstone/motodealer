import React, { Component } from 'react';
import { connect } from 'react-redux'
import { AddToCart } from '../Store/Actions/actions'
import './motos.css';

class Moto extends React.Component {
  
  handleClick = (id)=>{
    this.props.AddToCart(id);
  }

  render() {

      const { slug } = this.props.match.params;

      const motos = this.props.motos.filter(function (el) {
        return el.slug == slug
      });

      const cart = motos[0];

      return (
        <span>
          <p className="title">{cart.title}</p>
          <div className="desc">{cart.description}</div>
          <img className="image" src={cart.imageUrl}></img>
          <p className="price">Ціна: ${cart.price}</p>  
          <button className="button" onClick={() => { this.handleClick(cart.id) }}>Придбати!</button>
        </span>
      )
    }
    
  }
const mapStateToProps = (state) => {
  return {
    motos: state.items
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    AddToCart: (id) => { dispatch(AddToCart(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Moto)