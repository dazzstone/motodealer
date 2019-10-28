import './motolistitem.css';
import React from 'react';
import { Link } from "react-router-dom";

function MotoListItem({ title, image, key, price, slug, categoryName }) {
  return (
      <Link src={key} to={`/moto/${categoryName}/${slug}`} className="moto-list-item">
      <img src={image} className="img" alt="error"></img>
      <p class="title">{title}</p>
      <p src={price} className="price">
        ${price}
      </p>
    </Link>
  )
}
export default MotoListItem;