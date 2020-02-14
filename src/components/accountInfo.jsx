import React, { Component } from "react";
// import { Redirect, Router } from "react-router-dom";
// import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import App from "../App";
import { withRouter } from "react-router-dom";

let resjson;

class AccountInfo extends Component {
  state = {
    logout: false,
    response: []
  };

  componentDidMount() {
    this.onLoadFunc();
  }

  onLoadFunc = () => {
    var url =
      "http://172.20.49.143:8080/inventory/user/accountDetails?user_id=" +
      localStorage.getItem("userId");
    // //console.log(url);

    fetch(url, {
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        // console.log(json);
        this.setState({ response: json });
      });
  };

  logout = () => {
    this.setState({ logout: true }, () => {
      window.location.href = "/";
    });
    // console.log(this.state.logout);
  };

  render() {
    // if (this.state.logout) {
    //   return <Redirect to="/" />;
    // }

    return (
      <div className="best-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Account Info</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="left-content">
                <h4>{this.state.response.name}</h4>
                {/* <!-- <p><a rel="nofollow" href="https://templatemo.com/tm-546-sixteen-clothing" target="_parent">This template</a> is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website. <a rel="nofollow" href="https://templatemo.com/contact">Contact us</a> for more info.</p> --> */}

                <span id="prodId">{localStorage.getItem("userId")}</span>
                <br />

                {/* <a
                  id="buySubmit"
                  style="color: white;background-color: #333;"
                  className="filled-button"
                >
                  Back
                </a> */}
                <br />
                <br />
                <a
                  style={{ color: "white", backgroundColor: "#333" }}
                  onClick={this.logout}
                  className="filled-button"
                >
                  Log out
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <Router>
          <Route path="/" component={App} />
        </Router> */}
      </div>
    );
  }
}

export default withRouter(AccountInfo);
