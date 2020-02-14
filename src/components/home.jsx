import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  //   Redirect,
  Switch
} from "react-router-dom";
import MainConainer from "./mainConainer";
import PurchaseReport from "./purchaseReport";

import { withRouter } from "react-router-dom";
import Navbar from "./navbar";
import AccountInfo from "./accountInfo";
import Buy from "./buy";
import Login from "./login";
import Search from "./search";
class Home extends Component {
  state = {
    userId: localStorage.getItem("userId")
  };
  render() {
    // console.log(this.props);
    // console.log(this.state.userId);
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Navbar userId={localStorage.getItem("userId")} />
          </Switch>

          <Switch>
            <Route path="/home" component={MainConainer} />
            <Route path="/purchaseReport" component={PurchaseReport} />
            <Route path="/accountInfo" component={AccountInfo} />
            <Route path="/buy/:prodId" component={Buy} />
            <Route path="/search/:searchContent" component={Search} />
          </Switch>
        </Router>
      </div>
    );
  }
}

// userId={this.props.match.params.userId}

export default Home;
