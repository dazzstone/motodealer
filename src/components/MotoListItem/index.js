import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function MotoListItem({ title, image, key, price, slug}) {
  return (
      <Link src={key} to={slug} className="moto-list-item">
      <img src={image} className="img"></img>
      <p class="title">{title}</p>
      <p src={price} className="price">
        ${price}
      </p>
    </Link>
  )
}
export default MotoListItem;