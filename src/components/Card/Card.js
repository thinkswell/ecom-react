import React from "react";
import "./Card.scss";

export default function Card({ title, imageUrl, size }) {
  return (
    <div className={` ${size} card`}>
      <img src={imageUrl} alt={title} className="background-image" />
      <div className="card__about">
        <h1 className="card__about--title">{title}</h1>
        <span className="card__about--subtitle">shop now</span>
      </div>
    </div>
  );
}
