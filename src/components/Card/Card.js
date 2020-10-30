import React from "react";
import "./Card.scss";
import { withRouter } from "react-router-dom";

function Card({ title, imageUrl, size, linkUrl, history, match }) {
  return (
    <div
      className={` ${size} card`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <img src={imageUrl} alt={title} className="background-image" />
      <div className="card__about">
        <h1 className="card__about--title">{title}</h1>
        <span className="card__about--subtitle">shop now</span>
      </div>
    </div>
  );
}

export default withRouter(Card);
