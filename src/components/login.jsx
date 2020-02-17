import React, { Component } from "react";

class Login extends Component {
  state = {
    userId: "",
    password: "",
    isValid: false
  };

  loginAction = e => {
    e.preventDefault();
    console.log("hii");
    // alert(this.state.userId);
    const newUserId = this.state.userId;
    const newPassword = this.state.password;
    // alert(newUserId + " " + newPassword);
    if (newUserId === "" || newPassword === "") {
      alert("Enter username and password");
      return;
    }
    const url =
      "http://172.20.49.61:8080/inventory/login?user_id=" +
      newUserId +
      "&password=" +
      newPassword;

    fetch(url, {
      //mode : "cors",
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        // console.log(res);
        if (res.token === "") {
          alert("Invalid login");
          return;
        }
        sessionStorage.setItem("userTocken", res.token);
        localStorage.setItem("userId", newUserId);

        this.setState({ isValid: true }, () => {
          window.location.href = "/home";
        });
      });
  };

  myChange = event => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <div id="container-login">
        <div id="title">
          <i className="material-icons lock">lock</i> Login(User)
        </div>

        <form>
          <div className="input" style={{ display: "flex" }}>
            <div className="input-addon">
              <i className="material-icons">face</i>
            </div>
            <input
              id="userId"
              placeholder="UserId"
              type="text"
              required
              className="validate"
              autoComplete="off"
              name="userId"
              onBlur={this.myChange}
            />
          </div>

          <div className="clearfix"></div>

          <div className="input" style={{ display: "flex" }}>
            <div className="input-addon">
              <i className="material-icons">vpn_key</i>
            </div>
            <input
              id="password"
              placeholder="Password"
              type="password"
              required
              className="validate"
              autoComplete="off"
              name="password"
              onBlur={this.myChange}
            />
          </div>

          <input type="submit" onClick={this.loginAction} value="Log In" />
        </form>

        <div className="register">
          Don't have an account yet?
          <a href="http://172.20.49.127:5500/signup.html">
            <button id="register-link">Register here</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
