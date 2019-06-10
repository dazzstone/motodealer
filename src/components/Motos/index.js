import React from 'react';
import './index.css';
import motocycles from '.../../../src/staticDataSources/motostore/defaults';

class Moto extends React.Component {
  
  render() {

      const { slug } = this.props.match.params;

      const motos = motocycles.filter(function (el) {
        return el.slug == slug
      });

      const moto = motos[0];

      return (
        <span>
          <p className="title">{moto.title}</p>
          <div className="desc">{moto.description}</div>
          <img className="image" src={moto.imageUrl}></img>
          <p className="price">Ціна: ${moto.price}</p>
          <button className="button">Придбати!</button>
        </span>
        

      )
    }
    
  }
export default Moto;