import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainConainer from "./mainConainer";
import PurchaseReport from "./purchaseReport";
import Navbar from "./navbar";
import AccountInfo from "./accountInfo";
import Buy from "./buy";
import Login from "./login";
import Search from "./search";
import SignUp from "./signup";

function Home(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Navbar userId={sessionStorage.getItem("userId")} />
        </Switch>

        <Switch>
          <Route path="/home" exact component={MainConainer} />
          <Route path="/purchaseReport" exact component={PurchaseReport} />
          <Route path="/accountInfo" exact component={AccountInfo} />
          <Route path="/buy/:prodId" exact component={Buy} />
          <Route
            path="/search/:searchContent/:pageNo"
            exact
            component={Search}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
