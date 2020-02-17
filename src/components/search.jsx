import React, { Component } from "react";
import ProductCard from "./productCard";
class Search extends Component {
  state = {
    json: [],
    loading: false
  };
  componentDidMount() {
    this.onLoadFunc();
  }

  onLoadFunc = () => {
    let searchContent = this.props.match.params.searchContent;
    let url =
      `http://172.20.49.61:8080/inventory/user/search?search_query=` +
      searchContent;
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
        this.setState({ json: json, loading: true });
        // console.log(json);
      });
  };

  render() {
    let i = 0;
    return (
      <div className="latest-products">
        <div className="container">
          <div className="row" id="searchProdDetails">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Products from search</h2>
              </div>
            </div>
            {this.state.loading &&
              this.state.json.map(json => (
                <ProductCard key={i++} json={json} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
