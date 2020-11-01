import React from "react";
import "./Item.scss";

export default function item({ name, imageUrl, price }) {
  return (
    <div className="item">
      <img src={imageUrl} alt={name} className="image" />
      <div className="detail">
        <h2 className="name">{name}</h2>
        <h2 className="price">${price}</h2>
      </div>
      <button className="btn">Add to Cart</button>
    </div>
  );
}
