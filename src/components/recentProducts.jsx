import React, { Component } from "react";
import ProductCard from "./productCard";
class RecentProducts extends Component {
  state = {
    json: []
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    var url =
      "http://172.20.49.76:8080/inventory/user/home?user_id=" +
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
        this.setState({ json: json });
      });
  };

  render() {
    let i = 0;
    let label;
    if (sessionStorage.getItem("type") === "customer") label = "Recent Product";
    else label = "Recent Supply";
    return (
      <div className="latest-products">
        <div className="container">
          <div className="row" id="recentProdDetails">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>{label}</h2>
              </div>
            </div>
            {this.state.json.map(json => (
              <ProductCard key={i++} json={json} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default RecentProducts;
