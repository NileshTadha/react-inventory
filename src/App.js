import React, { Component } from "react";
import "./main.css";
import "./inventory.css";
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import Home from "./components/home";

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
