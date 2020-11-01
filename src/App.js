import React from "react";
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/ShopPage";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => {
  return <h1>Hats Page</h1>;
};

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}
