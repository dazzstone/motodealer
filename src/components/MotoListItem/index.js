import './index.css';
import React from 'react';

function MotoListItem({ title, image, desc, key, fixedImg, price}) {
  return (
    <div key={key} className="moto-list-item">
      <img src={image} className="image"></img>
      <p class="title">{title}</p>
      <div src={price} className="price">
        ${price}
      </div>
    </div>
  )
}
export default MotoListItem;