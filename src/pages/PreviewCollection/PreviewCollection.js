import React from "react";
import "./PreviewCollection.scss";
import Item from "../../components/Item/Item";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="previewCollection">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items
          .filter((_, id) => id < 4)
          .map((item, id) => (
            <Item key={id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
