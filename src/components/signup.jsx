import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  state = {
    name: "",
    userId: "",
    password: "",
    isValid: false,
    type: "customer"
  };

  loginAction = e => {
    e.preventDefault();
    // console.log("hii");
    // alert(this.state.userId);
    const newUserId = this.state.userId;
    const newPassword = this.state.password;
    const newName = this.state.name;

    // alert(newUserId + " " + newPassword);
    if (newUserId === "" || newPassword === "" || newName === "") {
      alert("Enter namme, username and password");
      return;
    }
    const url =
      "http://172.20.49.76:8080/inventory/signUp?type=" + this.state.type;

    fetch(url, {
      //mode : "cors",
      method: "POST",
      body: JSON.stringify({
        name: newName,
        user_id: newUserId,
        password: newPassword
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        console.log(res);
        if (res.token === "") {
          alert("Email already resistered");
          return;
        }
        sessionStorage.setItem("userTocken", res.token);
        sessionStorage.setItem("userId", newUserId);
        sessionStorage.setItem("type", this.state.type);

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
      <div id="container-register">
        <div id="title">
          <i className="material-icons lock">lock</i> Login(User)
        </div>

        <form>
          <div className="input" style={{ display: "flex" }}>
            <div className="input-addon">
              <i className="material-icons">face</i>
            </div>
            <input
              placeholder="Name"
              type="text"
              required
              className="validate"
              autoComplete="off"
              name="name"
              onBlur={this.myChange}
            />
          </div>

          <div className="input" style={{ display: "flex" }}>
            <div className="input-addon">
              <i className="material-icons">email</i>
            </div>
            <input
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

          <form>
            <label>
              <span style={{ fontWeight: "bold", margin: "10px" }}>Type:</span>
              <select
                name="type"
                onChange={this.myChange}
                value={this.state.type}
              >
                <option value="customer">Customer</option>
                <option value="vendor">Vendor</option>
              </select>
            </label>
          </form>
          <br />
          <button className="button" onClick={this.loginAction}>
            Register
          </button>
          {/* <input type="submit" onClick={this.loginAction} value="Register" /> */}
        </form>

        <div className="register">
          Don't have an account yet?
          <Link to="/">
            <button className="button">Log In here</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SignUp;
