import React, { Component } from "react";
import "./ShopPage.scss";
import SHOP_COLLECTIONS from "../../shop.data.js";
import PreviewCollection from "../PreviewCollection/PreviewCollection";

export default class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_COLLECTIONS,
    };
  }
  render() {
    console.log(this.state.collections);
    return (
      <div className="shopPage">
        <h1 className="title">Collections</h1>
        {this.state.collections.map((collection, id) => (
          <PreviewCollection
            key={id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}
