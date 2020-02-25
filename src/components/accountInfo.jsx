import React, { Component } from "react";

class AccountInfo extends Component {
  state = {
    logout: false,
    response: []
  };

  componentDidMount() {
    this.onLoadFunc();
  }

  onLoadFunc = () => {
    // if (sessionStorage.getItem("userId") == null) {
    //   alert("please login");
    //   console.log("hi");
    //   window.location.href = "/";
    // }
    var url =
      "http://172.20.49.76:8080/inventory/user/accountDetails?user_id=" +
      sessionStorage.getItem("userId");
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
      sessionStorage.removeItem("userId");
      window.location.href = "/";
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    // console.log(this.props);
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
                <span id="prodId">{sessionStorage.getItem("userId")}</span>
                <br />
                <br />
                <br />
                <button onClick={this.goBack} className="button">
                  Back
                </button>
                <br />
                <br />
                <button onClick={this.logout} className="button">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountInfo;
